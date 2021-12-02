var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  cors = require("cors");
mongoose = require("mongoose");
app.set('port',process.env.PORT || 4000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(require('./routers/router'));
// Configurar cabeceras y cors


module.exports = app;
