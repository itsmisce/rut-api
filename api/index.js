const express = require("express");
const routes = express.Router();
const { getRut, validarRut } = require("../controllers/rutControllers");

routes.get("/api", getRut);
Router.ger("/validar", validarRut)

module.exports = routes;
