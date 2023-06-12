const mongoose = require("mongoose");

//el equipo se trae de forma automatica
const gameZip = mongoose.model(
  "GameZip",
  new mongoose.Schema({
    team: String,
    url: String,
  })
);

module.exports = gameZip;
