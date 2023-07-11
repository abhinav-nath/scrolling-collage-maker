import React, { useRef } from "react";

const ImageUploader = ({ onImageUpload }) => {
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const imageDataUrl = reader.result;
      onImageUpload(imageDataUrl);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-uploader">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <button
        className="btn btn-primary btn-sm d-block mx-auto"
        onClick={() => inputRef.current.click()}
      >
        Upload Image
      </button>
    </div>
  );
};

export default ImageUploader;
