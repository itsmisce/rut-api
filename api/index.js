const express = require("express");
const app = express();
const routes = require("../routes/routes");
const cors = require("cors");
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Asigna las rutas a la aplicación
app.use("/", routes);

// en caso de querer usarlo desde local host, descomenta y ejecuta: npm start
// app.listen(port, () => {
//   console.log(`Servidor iniciado en http://localhost:${port}`);
// });

module.exports = app;
