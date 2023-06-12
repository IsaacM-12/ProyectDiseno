const mongoose = require("mongoose");

const Video = mongoose.model(
  "Video",
  new mongoose.Schema({
    url: String,
    team: String
  })
);

module.exports = Video;
