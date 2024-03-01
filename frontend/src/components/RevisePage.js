import React from "react";
import SectionTile from "./SectionTile";
import "../style/RevisePage.css";
import CocktailFilter from "./CocktailFilter";
import { Link } from "react-router-dom";

const RevisePage = ({ onSetSelectedCocktails, revisionCocktails }) => {
  return (
    <div className="revision-page">
      <h2 className="revision-favourites_title">
        Favourite revision categories
      </h2>
      <div className="revision-favourites_tiles">
        <SectionTile
          title="All House"
          image={
            <img
              src="https://picsum.photos/200/200"
              alt="Sweet success cocktail"
              className="revision-tile_image"
            />
          }
        />
        <SectionTile
          title="All Classics"
          image={
            <img
              src="https://picsum.photos/200/200"
              alt="Old fashioned cocktail"
              className="revision-tile_image"
            />
          }
        />
        <SectionTile
          title="Top Sellers"
          image={
            <img
              src="https://picsum.photos/200/200"
              alt="Chart"
              className="revision-tile_image"
            />
          }
        />
        <SectionTile
          title="Bugbears"
          image={
            <img
              src="https://picsum.photos/200/200"
              alt=""
              className="revision-tile_image"
            />
          }
        />
      </div>
      <CocktailFilter
        onSetSelectedCocktails={onSetSelectedCocktails}
        revisionCocktails={revisionCocktails}
      />
      <Link to="../revision-time">Go to revise</Link>
    </div>
  );
};

export default RevisePage;
