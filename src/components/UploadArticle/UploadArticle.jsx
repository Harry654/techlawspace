import React, { useState } from "react";
import Editor from "../SlateEditor/Editor";
import ImagePicker from "../ImagePicker/ImagePicker";
import members from "../../utils/members.json";
import serialize from "../SlateEditor/serializer";
import "./UploadArticle.css";

function UploadArticle() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [articleData, setArticleData] = useState({
    title: "",
    authors: [],
    tags: "",
  });
  const [contentValue, setContentValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ]);
  const categories = [
    "National",
    "World",
    "Culture",
    "Politics",
    "Education",
    "Science",
    "Sports",
  ];
  const handleArticleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData((prev) => ({
      ...prev,
      [name]: name !== "authors" ? value : updateAuthors(value),
    }));
  };

  const updateAuthors = (value) => {
    if (articleData.authors.includes(value)) {
      return articleData.authors.filter((author) => author !== value);
    }

    return [...articleData.authors, value];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);

    const html = serialize({
      children: contentValue,
    });

    const newArticleData = { ...articleData, content: html };
    formData.append("articleData", articleData);
    // console.log(newArticleData);
  };
  return (
    <div className="upload-article transition">
      <div className="upload-section transition">
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={articleData.title}
          onChange={handleArticleInputChange}
        />
        <ImagePicker
          previewUrl={previewUrl}
          setPreviewUrl={setPreviewUrl}
          setSelectedFile={setSelectedFile}
        />
        <Editor contentValue={contentValue} setContentValue={setContentValue} />
        <details>
          <summary className="summary">Authors</summary>
          {members.map((member, index) => (
            <div key={index} className="author">
              <label
                htmlFor={`member ${index}`}
                style={
                  articleData.authors.includes(member.name)
                    ? { opacity: 1, fontWeight: "bold", color: "#000" }
                    : {}
                }
              >
                {member.name}
              </label>
              <input
                id={`member ${index}`}
                type="checkbox"
                name="authors"
                value={member.name}
                checked={articleData.authors.includes(member.name)}
                onChange={handleArticleInputChange}
              />
            </div>
          ))}
        </details>
        <details>
          <summary className="summary">Category</summary>
          {categories.map((category, index) => (
            <div key={index} className="author">
              <label
                htmlFor={`category ${index}`}
                style={
                  category === articleData.category
                    ? { opacity: 1, fontWeight: "bold", color: "#000" }
                    : {}
                }
              >
                {category}
              </label>
              <input
                id={`category ${index}`}
                type="checkbox"
                name="category"
                value={category}
                checked={category === articleData.category}
                onChange={handleArticleInputChange}
              />
            </div>
          ))}
        </details>
        <input
          type="text"
          placeholder="Tags"
          name="tags"
          value={articleData.tags}
          onChange={handleArticleInputChange}
        />
      </div>

      <button type="submit" onClick={handleSubmit}>
        Upload
      </button>
    </div>
  );
}

export default UploadArticle;
