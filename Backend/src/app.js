const express = require("express");
const cocktailsRouter = require("./routes/cocktails");
const ingredientsRouter = require("./routes/ingredients");
const productsRouter = require("./routes/products");

const app = express();

app.use(express.json());
app.use("/cocktails", cocktailsRouter);
app.use("/ingredient", ingredientsRouter);
app.use("/products", productsRouter);

module.exports = app;
