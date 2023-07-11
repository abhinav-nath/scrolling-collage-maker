import React, { useState } from "react";
import CollageFrame from "./components/CollageFrame";
import ImageUploader from "./components/ImageUploader";

const App = () => {
  const [images, setImages] = useState([
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    "https://example.com/image4.jpg",
    "https://example.com/image5.jpg",
    "https://example.com/image6.jpg",
  ]);

  const handleImageUpload = (uploadedImage) => {
    setImages([...images, uploadedImage]);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Collage Maker</h1>
      <div className="row">
        <div className="col-md-8">
          <CollageFrame images={images} />
        </div>
        <div className="col-md-4">
          <ImageUploader onImageUpload={handleImageUpload} />
        </div>
      </div>
    </div>
  );
};

export default App;
