import React, { useState, useContext } from "react";
import Editor from "../../components/SlateEditor/Editor";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import members from "../../utils/members.json";
import serialize from "../../components/SlateEditor/serializer";
import NavBar from "../../components/navBar/NavBar";
import "./UploadArticle.css";
import axios from "axios";
import { ServerContext } from "../../context/ServerContext";
import categories from "../../utils/categories.json";

function UploadArticle() {
  const { API_SERVER_URL } = useContext(ServerContext);
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
  const handleArticleInputChange = (e) => {
    const { name, value } = e.target;
    setArticleData((prev) => ({
      ...prev,
      [name]: name !== "authors" ? value : updateAuthors(JSON.parse(value)),
    }));
  };

  const updateAuthors = (value) => {
    if (isCurrentAuthor(value.id)) {
      return articleData.authors.filter((author) => author.id !== value.id);
    }

    return [...articleData.authors, value];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);

    // serialize the nodes form the slate editor
    const html = serialize({
      children: contentValue,
    });

    const splitTags = articleData.tags.split(/,\s*|\s+/);
    formData.append(
      "articleData",
      JSON.stringify({
        ...articleData,
        tags: [...splitTags, ""],
        content: html,
      })
    );
    // console.log(newArticleData);
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2Nzc1MzM5NzV9.klvPNKHNG3p4b6uDjOniUV47AUNWKuVmQHSaWd9L-O0",
      },
    };
    try {
      let res = await axios.post(
        `${API_SERVER_URL}/v1/posts/new`,
        formData,
        options
      );
      // res = await res.json();
      // return console.log(res);

      const { message } = res.data;
      console.log(message);
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
  };

  const isCurrentAuthor = (id) => {
    let isCurrentAuthor = articleData.authors.find((author) => author.id === id);
    if(isCurrentAuthor) return true;
    return false;
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
                      value={JSON.stringify({ id: index, name: member.name })}
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
                          ? { opacity: 1, fontWeight: "bold", color: "#000", textTransform: "capitalize" }
                          : { textTransform: "capitalize" }
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
