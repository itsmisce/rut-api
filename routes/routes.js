const express = require("express");
const routes = express.Router();

const { getRut } = require("../controllers/rutControllers");

routes.get("/api", getRut);

module.exports = routes;
