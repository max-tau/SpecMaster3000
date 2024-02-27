import React from "react";
import "../style/ReviseAndTestCard.css";

const ReviseAndTestCard = () => {
  return (
    <div className="cocktail-card-container">
      <div className="cocktail-card">
        <h2>Cocktail Name</h2>
        <img alt="cocktail" src="https://picsum.photos/200/200"></img>
        <form className="cocktail-card_form">
          <label className="cocktail-card_form_label" htmlFor="ingredients">
            Ingredients
          </label>
          <input
            className="cocktail-card_form_input"
            type="text"
            id="ingredients"
          />
          <label className="cocktail-card_form_label" htmlFor="glass">
            Glass
          </label>
          <select
            className="cocktail-card_form_dropdown"
            id="glass"
            placeholder="Select a glass"
          >
            <option value="crystal rocks">Crystal rocks</option>
            <option value="crystal collins">Crystal collins</option>
            <option value="sling">Sling</option>
            <option value="coupette">Coupette</option>
            <option value="tankard">Tankard</option>
            <option value="trophy">Trophy</option>
            <option value="shooter">Shooter</option>
          </select>
          <label className="cocktail-card_form_label" htmlFor="method">
            Method
          </label>
          <input className="cocktail-card_form_input" type="text" id="method" />
          <label className="cocktail-card_form_label" htmlFor="garnish">
            Garnish
          </label>
          <input
            className="cocktail-card_form_input"
            type="text"
            id="garnish"
          />
        </form>
      </div>
    </div>
  );
};

export default ReviseAndTestCard;
