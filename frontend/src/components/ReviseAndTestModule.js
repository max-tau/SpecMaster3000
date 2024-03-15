import React from "react";
import CocktailCard from "./CocktailCard";

const ReviseAndTestModule = ({ selectedCocktails }) => {
  return (
    <div>
      <CocktailCard selectedCocktails={selectedCocktails} />
    </div>
  );
};

export default ReviseAndTestModule;
