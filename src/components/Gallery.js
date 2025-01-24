import React, { useState } from "react";
import "./Gallery.css";
import galleryData from "../data/galleryData";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [modalItem, setModalItem] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleItemClick = (item) => {
    setModalItem(item);
  };

  const closeModal = () => {
    setModalItem(null);
  };

  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = "../../public/images/venue1.jpg"; // Generic fallback image
  };

  const filteredData =
    selectedCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  return (
    <div className="gallery">
      <h2 className="gallery-title">Our Work</h2>
      <div className="gallery-categories">
        {["all", "venue", "decor", "food", "entertainment"].map((category) => (
          <button
            key={category}
            className={`category-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => handleItemClick(item)}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.text}
                onError={handleImageError}
              />
            ) : (
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support videos.
              </video>
            )}
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {modalItem && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modalItem.type === "image" ? (
              <img
                src={modalItem.src}
                alt={modalItem.text}
                onError={handleImageError}
              />
            ) : (
              <video controls autoPlay>
                <source src={modalItem.src} type="video/mp4" />
                Your browser does not support videos.
              </video>
            )}
            <p>{modalItem.text}</p>
            <button className="modal-close-btn" onClick={closeModal}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
