import React, { useState } from "react";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import NavBar from "../../components/navBar/NavBar";
import "./UploadMember.css";

function UploadMember() {
  const [memberSelectedFile, setMemberSelectedFile] = useState(null);
  const [memberPreviewUrl, setMemberPreviewUrl] = useState(null);
  const [memberData, setMemberData] = useState({
    title: "",
    authors: [],
    tags: "",
  });
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
    setMemberData((prev) => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", memberSelectedFile, memberSelectedFile.name);


    formData.append("memberData", memberData);
  };

  return (
    <div className="dashboard">
      <NavBar />
      <div className="dashboard-inner">
    <div className="upload-member transition">
      <div className="upload-section transition">
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={memberData.name}
          onChange={handleArticleInputChange}
        />
        <ImagePicker
          previewUrl={memberPreviewUrl}
          setPreviewUrl={setMemberPreviewUrl}
          setSelectedFile={setMemberSelectedFile}
        />
        <textarea
          placeholder="Bio"
          name="bio"
          value={memberData.bio}
          onChange={handleArticleInputChange}
        />
        <details>
          <summary className="summary">Law Category</summary>
          <div>
          {categories.map((category, index) => (
            <div key={index} className="author">
              <label
                htmlFor={`category ${index}`}
                style={
                  category === memberData.category
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
                checked={category === memberData.category}
                onChange={handleArticleInputChange}
                />
            </div>
          ))}
        </div>
        </details>
      </div>

      <button type="submit" onClick={handleSubmit}>
        Upload
      </button>
    </div>
                </div>
              </div>
  );
}

export default UploadMember;
