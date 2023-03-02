import React, { useState, useContext } from "react";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import NavBar from "../../components/navBar/NavBar";
import "./UploadMember.css";
import categories from "../../utils/categories.json";
import axios from "axios";
import { ServerContext } from "../../context/ServerContext";

function UploadMember() {
  const { API_SERVER_URL, authorizationToken } = useContext(ServerContext);

  const [selectedFile, setSelectedFile] = useState(null);
  const [memberPreviewUrl, setMemberPreviewUrl] = useState(null);
  const [memberData, setMemberData] = useState({
    name: "",
    bio: "",
    category: "",
  });
  const handleArticleInputChange = (e) => {
    const { name, value } = e.target;
    setMemberData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("file", selectedFile, selectedFile.name);

  //   formData.append("memberData", memberData);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, bio, category } = memberData;
    if (!(name && bio && category)) return alert("A required field is empty!");

    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);

    formData.append(
      "memberData",
      JSON.stringify({
        ...memberData,
      })
    );

    // console.log(newmemberData);
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
        authorization: `Bearer ${authorizationToken}`,
      },
    };
    try {
      let res = await axios.post(
        `${API_SERVER_URL}/v1/members/add`,
        formData,
        options
      );
      // res = await res.json();

      // return console.log(res.data);
      const { message, success } = res.data;
      if (success) {
        alert(message);
      }
    } catch (error) {
      console.log(error);
      alert("something went wrong");
    }
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
              setSelectedFile={setSelectedFile}
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
                          ? {
                              opacity: 1,
                              fontWeight: "bold",
                              color: "#000",
                              textTransform: "capitalize",
                            }
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
