const express = require("express");
const routes = express.Router();

routes.get("/api", getRut);

module.exports = routes;
