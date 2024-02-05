const express = require("express");
const cors = require("cors");
const cocktailsRouter = require("./routes/cocktails");
const ingredientsRouter = require("./routes/ingredients");
const productsRouter = require("./routes/products");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/cocktails", cocktailsRouter);
app.use("/ingredients", ingredientsRouter);
app.use("/products", productsRouter);

module.exports = app;
