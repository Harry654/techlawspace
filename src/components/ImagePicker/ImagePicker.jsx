import React from "react";
import "./ImagePicker.css";
import { IoMdCloudUpload } from "react-icons/io";

const ImagePicker = ({ previewUrl, setPreviewUrl, setSelectedFile }) => {
  
  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  };


  const handleClickInput = () => {
    const fileSelector = document.querySelector("#file-selector");
    fileSelector.click();
  };

  return (
    <div className="image-picker" onClick={handleClickInput}>
      <input id="file-selector" type="file" onChange={fileSelectedHandler} />

      {!previewUrl && <IoMdCloudUpload size={100} />}
      {!previewUrl && <p>Upload Thumbnail</p>}
      {previewUrl && <img src={previewUrl} alt="Preview" />}
    </div>
  );
};

export default ImagePicker;
