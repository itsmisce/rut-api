//Este archivo es en caso de correr la API de forma local
const express = require("express");
const app = express();
const routes = require("./api/routes"); 
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
