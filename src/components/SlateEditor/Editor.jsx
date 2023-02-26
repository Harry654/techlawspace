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
import escapeHtml from "escape-html";
import { Text } from "slate";

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
    console.log(html);
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

  const serialize = (node) => {
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
      if (node.color) {
        string = `<span style="color: ${node.color}">${string}</span>`;
      }
      if (node.fontFamily) {
        string = `<span style="font-family: ${node.fontFamily}">${string}</span>`;
      }
      if (node.fontSize) {
        string = `<span style="font-size: ${node.fontSize}">${string}</span>`;
      }
      return string;
    }

    const children = node.children.map((n) => serialize(n)).join("");

    switch (node.type) {
      case "headingOne":
        return `<h1>${children}</h1>`;
      case "headingTwo":
        return `<h2>${children}</h2>`;
      case "headingThree":
        return `<h3>${children}</h3>`;
      case "paragraph":
        return `<p>${children}</p>`;
      case "blockquote":
        return `<blockquote><p>${children}</p></blockquote>`;
      case "orderedList":
        return `<ol style="list-style-type: number;">${children}</ol>`;
      case "unorderedList":
        return `<ul style="list-style-type: circle;">${children}</ul>`;
      case "list-item":
        return `<li>${children}</li>`;
      case "alignLeft":
        return `<p style="text-align: left;">${children}</p>`;
      case "alignCenter":
        return `<p>${children}</p>`;
      case "alignRight":
        return `<p style="text-align: right;">${children}</p>`;
      case "justify":
        return `<p style="text-align: justify;">${children}</p>`;
      case "link":
        return `<a href="${escapeHtml(node.url)}">${children}</a>`;
      case "table":
        return `<table>${children}</table>`;
      case "table-row":
        return `<tr>${children}</tr>`;
      case "table-cell":
        return `<td>${children}</td>`;
      default:
        return children;
    }
  };

  const html = serialize({
    children: value,
  });
  return (
    <Slate editor={editor} value={value} onChange={handleEditorChange}>
      <Toolbar handleCodeToText={handleCodeToText} />
      {/* <div dangerouslySetInnerHTML={{ __html: html }} />
      {html}
      {JSON.stringify(value)} */}
      <div
        className="editor-wrapper"
        style={{ border: "1px solid #f3f3f3", padding: "0 10px" }}
      >
        <Editable
          placeholder="Write something"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          style={{ minHeight: 400, overflowWrap: "break-word"}}
        />
      </div>
      {htmlAction.showInput && (
        <CodeToText {...htmlAction} handleCodeToText={handleCodeToText} />
      )}
    </Slate>
  );
};

export default SlateEditor;
