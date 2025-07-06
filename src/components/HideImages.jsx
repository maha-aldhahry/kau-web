import React, { useState } from "react";
import "./HideImages.css";

const HideImages = () => {
  const [hideImages, setHideImages] = useState(false);

  const toggleImages = () => {
    setHideImages(!hideImages);
  };

  return (
    <div className="hide-images-container">
      <button onClick={toggleImages} title="إخفاء الصور" className="hide-btn">
        🖼️
      </button>

      <div className="image-gallery">
        <img
          src="https://via.placeholder.com/200x150?text=صورة+1"
          alt="صورة 1"
          style={{ display: hideImages ? "none" : "inline-block" }}
        />
        <img
          src="https://via.placeholder.com/200x150?text=صورة+2"
          alt="صورة 2"
          style={{ display: hideImages ? "none" : "inline-block" }}
        />
      </div>
    </div>
  );
};

export default HideImages;
