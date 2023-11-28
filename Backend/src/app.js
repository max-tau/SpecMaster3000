const express = require("express");
const cocktailsRouter = require("./routes/cocktails");

const app = express();

app.use(express.json());
app.use("/cocktails", cocktailsRouter);

module.exports = app;
