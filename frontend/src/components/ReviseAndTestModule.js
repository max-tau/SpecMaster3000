import React from "react";
import ReviseAndTestCard from "./ReviseAndTestCard";

const ReviseAndTestModule = ({ selectedCocktails }) => {
  return (
    <div>
      <ReviseAndTestCard selectedCocktails={selectedCocktails} />
    </div>
  );
};

export default ReviseAndTestModule;
