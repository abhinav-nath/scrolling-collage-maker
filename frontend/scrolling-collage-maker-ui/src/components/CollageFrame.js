import React from "react";
import CollageImage from "./CollageImage";

const CollageFrame = ({ images }) => {
  return (
    <div className="collage-frame-container">
      {images.map((image, index) => (
        <CollageImage key={index} image={image} />
      ))}
    </div>
  );
};

export default CollageFrame;
