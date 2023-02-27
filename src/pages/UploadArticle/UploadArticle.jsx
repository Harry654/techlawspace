import React, { useState } from "react";
import Editor from "../../components/SlateEditor/Editor";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import members from "../../utils/members.json";
import serialize from "../../components/SlateEditor/serializer";
import NavBar from "../../components/navBar/NavBar";
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
      return articleData.authors.filter((author) => author.id !== value.id);
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
    formData.append("articleData", newArticleData);
    console.log(newArticleData);
  };

  const isCurrentAuthor = (id) => {
    return Object.keys(articleData).forEach((author) => {
      if (author.id === id) {
        return true;
      }

      return false;
    });
  };
  return (
    <div className="dashboard">
      <NavBar />
      <div className="dashboard-inner">
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
            <Editor
              contentValue={contentValue}
              setContentValue={setContentValue}
            />
            <details>
              <summary className="summary">Authors</summary>
              <div>
                {members.map((member, index) => (
                  <div key={index} className="author">
                    <label
                      htmlFor={`member ${index}`}
                      style={
                        isCurrentAuthor(index)
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
                      value={{ id: index, name: member.name }}
                      checked={isCurrentAuthor(index)}
                      onChange={handleArticleInputChange}
                    />
                  </div>
                ))}
              </div>
            </details>
            <details>
              <summary className="summary">Category</summary>
              <div>
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
              </div>
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
      </div>
    </div>
  );
}

export default UploadArticle;
