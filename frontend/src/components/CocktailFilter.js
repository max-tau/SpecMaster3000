import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/CocktailFilter.css";

const CocktailFilter = () => {
  axios.defaults.baseURL = "http://localhost:3001";

  const [houseCocktails, setHouseCocktails] = useState([]);
  const [houseAccordionActive, setHouseAccordionActive] = useState(false);
  const [classicAccordionActive, setClassicAccordionActive] = useState(false);
  const [searchState, setSearchState] = useState({ query: "", list: [] });
  const [selectedCocktails, setSelectedCocktails] = useState([]);
  /* Add a group use state for cocktails, axios.get for all cocktails then filter to get others. results should be all cocktails in search input */

  const handleSearchChange = (e) => {
    const results = houseCocktails.filter((houseCocktail) => {
      if (e.target.value === "") return houseCocktails;
      return houseCocktail.cocktailName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setSearchState({ query: e.target.value, list: results });
  };

  const handleAddCocktail = (e) => {
    setSelectedCocktails([...selectedCocktails, e]);
  };

  // useEffect(() => {
  //   axios
  //     .get("/cocktails")
  //     .then(({ data }) => setHouseCocktails(data))
  //     .catch(() => {
  //       console.log("no data found");
  //     }, []);
  // });

  useEffect(() => {
    setHouseCocktails([
      {
        cocktailName: "Sweet Success",
        method: "Shake and fine strain",
        garnish: "Rice paper",
        glass: "Coupette",
      },
      {
        cocktailName: "Lady Luck",
        method: "Shake and strain",
        garnish: "Dehydrated lemon",
        glass: "Catalina",
      },
      {
        cocktailName: "Tankard Ten",
        method: "Shake, dump and top",
        garnish: "Dehydrated apple",
        glass: "Tankard",
      },
      {
        cocktailName: "Matilda's Margarita",
        method: "Shake and strain",
        garnish: "Salt rim and dehydrated lime",
        glass: "Crystal rocks",
      },
    ]);
  }, []);

  return (
    <div className="cocktail-filter">
      <h2>Custom selection</h2>
      <form>
        <input
          type="search"
          placeholder="Search by cocktail name"
          className="cocktail-search"
          onChange={handleSearchChange}
          value={searchState.query}
        />
        <div className="search-result_list">
          {searchState.query === ""
            ? ""
            : searchState.list.map((houseCocktail) => {
                return (
                  <li key={houseCocktail.index}>
                    <button
                      value={houseCocktail.cocktailName}
                      onClick={(e) => handleAddCocktail(e.target.value)}
                      type="button"
                    >
                      {houseCocktail.cocktailName}
                    </button>
                  </li>
                );
              })}
        </div>
      </form>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setHouseAccordionActive(!houseAccordionActive)}
          >
            <div>House cocktails &nbsp;</div>
            <div>{houseAccordionActive ? "-" : "+"}</div>
          </div>
          {houseAccordionActive && (
            <form className="accordion-content">
              {houseCocktails.map((houseCocktail) => (
                <div className="cocktail-checkbox">
                  <input
                    type="checkbox"
                    id="houseCocktail"
                    name="houseCocktail"
                    value={houseCocktail.cocktailName}
                  />
                  {houseCocktail.cocktailName}
                </div>
              ))}
              <button className="accordion-content_button" type="submit">
                Add
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="accordion">
        <div className="accordion-item">
          <div
            className="accordion-title"
            onClick={() => setClassicAccordionActive(!classicAccordionActive)}
          >
            <div>Classic cocktails &nbsp;</div>
            <div>{classicAccordionActive ? "-" : "+"}</div>
          </div>
          {classicAccordionActive && (
            <div>
              <form className="accordion-content">
                {houseCocktails.map((houseCocktail) => (
                  <div className="cocktail-checkbox">
                    <input
                      type="checkbox"
                      id="classicCocktail"
                      name="classicCocktail"
                      value={houseCocktail}
                      onClick={() => this.props.onClick(handleAddCocktail())}
                    />
                    {houseCocktail.cocktailName}
                  </div>
                ))}
                <button className="accordion-content_button" type="submit">
                  Add
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <h3>Current selection</h3>
      <div className="selected-cocktails">
        <ul>
          {selectedCocktails.map((selectedCocktail) => (
            <li>{selectedCocktail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CocktailFilter;
