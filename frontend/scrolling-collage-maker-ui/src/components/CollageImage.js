import React, { useState } from "react";

const CollageImage = ({ image }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 200, height: 200 });

  const handleDrag = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  const handleResize = (event) => {
    setSize({
      width: event.target.offsetWidth,
      height: event.target.offsetHeight,
    });
  };

  return (
    <div
      className="collage-image border rounded p-1"
      style={{
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
      }}
      draggable="true"
      onDrag={handleDrag}
      onDragEnd={handleDrag}
      onMouseUp={handleResize}
    >
      <img src={image} alt="Collage Image" className="img-fluid rounded" />
    </div>
  );
};

export default CollageImage;
