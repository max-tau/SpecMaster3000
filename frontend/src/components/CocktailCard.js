import React, { useState } from "react";
import "../style/ReviseAndTestCard.css";
import axios from "axios";

const ReviseAndTestCard = ({ selectedCocktails }) => {
  axios.defaults.baseURL = "http://localhost:3001";
  const [inputs, setInputs] = useState([
    {
      ingredientName: "",
      ingredientQuantity: "",
      ingredientMeasure: "",
    },
  ]);
  const [currentlySelected, setCurrentlySelected] = useState(
    selectedCocktails[0]
  );
  const [learnerResponses, setLearnerResponses] = useState([]);
  const fields = {
    cocktailName: "",
    glass: "",
    method: "",
    garnish: "",
    category: "",
  };
  const [formFields, setFormFields] = useState(fields);
  const handleFieldChange = (e) => {
    if (selectedCocktails) {
      setFormFields({
        ...formFields,
        ...inputs,
        cocktailName: { currentlySelected },
        [e.target.name]: e.target.value,
      });
    } else {
      setFormFields({
        ...formFields,
        ...inputs,
        [e.target.name]: e.target.value,
      });
    }
    // inputs.forEach(async (input) => {await axios.get("/products").then(response => {response.data.filter(product => (product.productName === input.ingredientName))})})
    // const productId = async () => {axios.get("/products").then(response => {response.data.filter(product => product.productName === )})}
  };
  const [showPlaceholder, setShowPlaceholder] = useState();

  const handleAddInput = () => {
    setInputs([
      ...inputs,
      { ingredientName: "", ingredientQuantity: "", ingredientMeasure: "" },
    ]);
  };
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const onChangeValue = [...inputs];
    onChangeValue[index][name] = value;
    setInputs(onChangeValue);
  };
  const handleSkip = (e) => {
    selectedCocktails.push(currentlySelected);
    selectedCocktails.shift();
    setCurrentlySelected(selectedCocktails[0]);
    setInputs([
      {
        ingredientName: "",
        ingredientQuantity: "",
        ingredientMeasure: "",
      },
    ]);
    setFormFields(fields);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLearnerResponses([...learnerResponses, formFields]);
    console.log(learnerResponses);
    setInputs([
      {
        ingredientName: "",
        ingredientQuantity: "",
        ingredientMeasure: "",
      },
    ]);
    setFormFields(fields);
    selectedCocktails.shift();
    setCurrentlySelected(selectedCocktails[0]);
  };
  const handleAddCocktail = async (e) => {
    e.preventDefault();
    console.log(formFields);
    await axios
      .post("/cocktails", {
        cocktailName: formFields.cocktailName,
        method: formFields.method,
        garnish: formFields.garnish,
        glass: formFields.glass,
        category: formFields.category,
      })
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <div className="cocktail-card-container">
      <div className="cocktail-card">
        <form
          className="cocktail-card_form"
          onSubmit={
            selectedCocktails.length > 0
              ? (e) => handleSubmit(e)
              : (e) => handleAddCocktail(e)
          }
        >
          {selectedCocktails.length > 0 ? (
            <>
              <h2>{currentlySelected}</h2>
              <img alt="cocktail" src="https://picsum.photos/200/200"></img>
            </>
          ) : (
            <>
              <label
                className="cocktail-card_form_label"
                htmlFor="cocktailName"
              >
                Cocktail name
              </label>
              <input
                className="cocktail-card_form_input"
                name="cocktailName"
                id="cocktailName"
                type="text"
                value={formFields.cocktailName}
                placeholder="Cocktail name"
                onChange={(e) => handleFieldChange(e)}
              ></input>
              <label className="cocktail-card-form_label" htmlFor="categoryt">
                Category
              </label>
              <select
                className="cocktail-card_form_dropdown"
                id="category"
                name="category"
                value={formFields.category}
                onChange={(e) => handleFieldChange(e)}
              >
                <option
                  className={
                    "placeholder-input_" +
                    (!showPlaceholder ? "hidden" : "visible")
                  }
                  value="default"
                >
                  Select category
                </option>
                <option value="House">House</option>
                <option value="Classic">Classic</option>
              </select>
            </>
          )}
          <label className="cocktail-card_form_label">
            Ingredients
            <div className="ingredients-container" id="ingredients">
              {inputs.map((ingredientInput, index) => (
                <>
                  <div className="input-container" key={ingredientInput.index}>
                    <input
                      className="ingredient-input"
                      name="ingredientName"
                      id="ingredientName"
                      type="text"
                      value={ingredientInput.ingredientName}
                      placeholder="Ingredient name"
                      onChange={(e) => handleChange(e, index)}
                    />
                    {ingredientInput.ingredientMeasure === "top" ? null : (
                      <input
                        className="ingredient-input"
                        name="ingredientQuantity"
                        id="ingredientQuantity"
                        type="text"
                        value={ingredientInput.ingredientQuantity}
                        placeholder="Quantity"
                        onChange={(e) => handleChange(e, index)}
                      />
                    )}
                    <select
                      required
                      className="ingredient-input_dropdown"
                      name="ingredientMeasure"
                      id="ingredientMeasure"
                      value={ingredientInput.ingredientMeasure}
                      onFocus={() => setShowPlaceholder(false)}
                      onChange={(e) => handleChange(e, index)}
                    >
                      <option
                        className={
                          "placeholder-input_" +
                          (!showPlaceholder ? "hidden" : "visible")
                        }
                        value="default"
                      >
                        Select unit
                      </option>
                      <option value="ml">ml</option>
                      <option value="dashes/drops">dashes/drops</option>
                      <option value="top">top</option>
                      <option value="bottle">bottle</option>
                      <option value="leaves">leaves</option>
                    </select>
                  </div>
                  {index === inputs.length - 1 && (
                    <button
                      className="ingredient-input_button"
                      type="button"
                      onClick={() => handleAddInput()}
                    >
                      Add Ingredient
                    </button>
                  )}
                </>
              ))}
            </div>
          </label>
          <label className="cocktail-card_form_label" htmlFor="glass">
            Glass
          </label>
          <select
            className="cocktail-card_form_dropdown"
            id="glass"
            name="glass"
            value={formFields.glass}
            onChange={(e) => handleFieldChange(e)}
          >
            <option
              className={
                "placeholder-input_" + (!showPlaceholder ? "hidden" : "visible")
              }
              value="default"
            >
              Select glass
            </option>
            <option value="Crystal rocks">Crystal rocks</option>
            <option value="Crystal collins">Crystal collins</option>
            <option value="Sling">Sling</option>
            <option value="Coupette">Coupette</option>
            <option value="Wine">Wine</option>
            <option value="Tankard">Tankard</option>
            <option value="Trophy">Trophy</option>
            <option value="Shooter">Shooter</option>
          </select>
          <label className="cocktail-card_form_label" htmlFor="method">
            Method
          </label>
          <input
            className="cocktail-card_form_input"
            type="text"
            id="method"
            name="method"
            value={formFields.method}
            onChange={(e) => handleFieldChange(e)}
          />
          <label className="cocktail-card_form_label" htmlFor="garnish">
            Garnish
          </label>
          <input
            className="cocktail-card_form_input"
            type="text"
            id="garnish"
            name="garnish"
            value={formFields.garnish}
            onChange={(e) => handleFieldChange(e)}
          />
          <button type="submit">Submit</button>
        </form>
        {selectedCocktails.length > 0 ? (
          <button className="skip-card_button" onClick={handleSkip}>
            Skip card
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default ReviseAndTestCard;
