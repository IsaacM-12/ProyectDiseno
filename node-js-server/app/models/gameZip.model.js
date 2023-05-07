const mongoose = require("mongoose");

const gameZip = mongoose.model(
  "GameZip",
  new mongoose.Schema({
    team: String,
    url: String,
  })
);

module.exports = gameZip;
