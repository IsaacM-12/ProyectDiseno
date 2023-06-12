const mongoose = require("mongoose");

//el equipo se trae de forma automatica
const Video = mongoose.model(
  "Video",
  new mongoose.Schema({
    url: String,
    team: String
  })
);

module.exports = Video;
