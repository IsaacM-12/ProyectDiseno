const mongoose = require("mongoose");

const Team = mongoose.model(
  "Team",
  new mongoose.Schema({
    name: String,
    calificacion: {
      type: Number,
      default: 0
    },
    comentario: String,
  })
);

module.exports = Team;
