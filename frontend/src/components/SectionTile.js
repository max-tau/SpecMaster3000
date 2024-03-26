import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/SectionTile.css";

const SectionTile = ({ title, image, onSetSelectedCocktails }) => {
  const [classicCocktails, setClassicCocktails] = useState([]);
  const [houseCocktails, setHouseCocktails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("/cocktails")
      .then(({ data }) => {
        const filteredForHouse = data.filter(
          (cocktail) => cocktail.category === "House"
        );
        const houseCocktailsList = [];
        filteredForHouse.forEach((cocktail) =>
          houseCocktailsList.push(cocktail.cocktailName)
        );
        setHouseCocktails(houseCocktailsList);
        const filteredForClassic = data.filter(
          (cocktail) => cocktail.category === "Classic"
        );
        const classicCocktailsList = [];
        filteredForClassic.forEach((cocktail) =>
          classicCocktailsList.push(cocktail.cocktailName)
        );
        setClassicCocktails(classicCocktailsList);
      })
      .catch(() => {
        console.log("no data found");
      }, []);
  });

  const handleClick = () => {
    if (title === "All House") {
      onSetSelectedCocktails(houseCocktails);
    } else if (title === "All Classics") {
      onSetSelectedCocktails(classicCocktails);
    } else {
      console.log("This option is not ready yet");
    }
    navigate("/revision-time");
  };
  return (
    <div className="section-tile" onClick={handleClick}>
      <h2 className="section-tile_title">{title}</h2>
      <div className="section-tile_image">{image}</div>
    </div>
  );
};

export default SectionTile;
