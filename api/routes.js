const express = require("express");
const routes = express.Router();
const { getRut } = require("../controllers/rutControllers");
require('dotenv').config();

routes.get("/", (req, res) => {
  res.status(200).send("Bienvenido a la API Generadora de Ruts");
});

routes.get("/api", getRut);

module.exports = routes;
