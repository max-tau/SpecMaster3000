import React from "react";
import "../style/SectionTile.css";

const SectionTile = ({ title, image }) => {
  return (
    <div className="section-tile">
      <h2 className="section-tile_title">{title}</h2>
      <div className="section-tile_image">{image}</div>
    </div>
  );
};

export default SectionTile;
