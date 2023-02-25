import React, { useCallback, useMemo, useState } from "react";
import { createEditor } from "slate";
import { withHistory } from "slate-history";
import { Slate, Editable, withReact } from "slate-react";
import Toolbar from "./Toolbar/Toolbar";
import { getMarked, getBlock } from "./utils/SlateUtilityFunctions.js";
import withLinks from "./plugins/withLinks.js";
import withTables from "./plugins/withTable.js";
import withEmbeds from "./plugins/withEmbeds.js";
import withEquation from "./plugins/withEquation.js";
import "./Editor.css";
import CodeToText from "./Elements/CodeToText/CodeToText";
import escapeHtml from 'escape-html'
import { Text } from 'slate'



const Element = (props) => {
  return getBlock(props);
};
const Leaf = ({ attributes, children, leaf }) => {
  children = getMarked(leaf, children);
  return <span {...attributes}>{children}</span>;
};
const SlateEditor = () => {
  const editor = useMemo(
    () =>
      withEquation(
        withHistory(
          withEmbeds(withTables(withLinks(withReact(createEditor()))))
        )
      ),
    []
  );
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);
  
  const handleEditorChange = (newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  const renderElement = useCallback((props) => <Element {...props} />, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  const [htmlAction, setHtmlAction] = useState({
    showInput: false,
    html: "",
    action: "",
    location: "",
  });
  const handleCodeToText = (partialState) => {
    setHtmlAction((prev) => ({
      ...prev,
      ...partialState,
    }));
  };

const serialize = node => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);
    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }
    if (node.italic) {
      string = `<em>${string}</em>`;
    }
    if (node.underline) {
      string = `<u>${string}</u>`;
    }
    if (node.subscript) {
      string = `<sub>${string}</sub>`;
    }
    if (node.superscript) {
      string = `<sup>${string}</sup>`;
    }
    if (node.strikethrough) {
      string = `<del>${string}</del>`;
    }
    return string;
  }

  const children = node.children.map(n => serialize(n)).join('');

  switch (node.type) {
    case 'headingOne':
      return `<h1>${children}</h1>`;
    case 'headingTwo':
      return `<h2>${children}</h2>`;
    case 'headingThree':
      return `<h3>${children}</h3>`;
    case 'paragraph':
      return `<p>${children}</p>`;
    case 'orderedList':
      return `<ol style="list-style-type: number;">${children}</ol>`;
    case 'unorderedList':
      return `<ul style="list-style-type: circle;">${children}</ul>`;
    case 'list-item':
      return `<li>${children}</li>`;
    case 'link':
      return `<a href="${escapeHtml(node.url)}">${children}</a>`;
    default:
      return `<div>${children}</div>`;
  }
};

  
  const html = serialize({
    children: value
  });
  return (
    <Slate editor={editor} value={value} onChange={handleEditorChange}>
      <Toolbar handleCodeToText={handleCodeToText} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      {html}
      {JSON.stringify(value)}
      <div
        className="editor-wrapper"
        style={{ border: "1px solid #f3f3f3", padding: "0 10px" }}
      >
        <Editable
          placeholder="Write something"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
        />
      </div>
      {htmlAction.showInput && (
        <CodeToText {...htmlAction} handleCodeToText={handleCodeToText} />
      )}
    </Slate>
  );
};

export default SlateEditor;
