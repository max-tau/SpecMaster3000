import React from "react";
import SectionTile from "./SectionTile";
import "../style/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="dashboard-tiles_grid">
        <SectionTile
          title="Revise"
          image={
            <img
              src="images/revision.jpg"
              alt="Book"
              className="dashboard-tile_image"
            />
          }
        />
        <SectionTile
          title="Test"
          image={
            <img
              src="images/testpaper.jpg"
              alt="Test paper"
              className="dashboard-tile_image"
            />
          }
        />
        <SectionTile
          title="Create"
          image={
            <img
              src="images/cocktail.jpg"
              alt="Cocktail"
              className="dashboard-tile_image"
            />
          }
        />
        <SectionTile
          title="Explore"
          image={
            <img
              src="images/bottleshop.jpg"
              alt="Cocktail ingredients"
              className="dashboard-tile_image"
            />
          }
        />
      </div>
    </div>
  );
};

export default Dashboard;
