const mongoose = require("mongoose");

//el equipo se trae de forma automatica
const gameZip = mongoose.model(
  "GameZip",
  new mongoose.Schema({
    name: String,
    team: String,
    url: String,
    state: String,
  })
);

module.exports = gameZip;
