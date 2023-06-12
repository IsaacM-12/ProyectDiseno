const mongoose = require("mongoose");

const SolicitudSerOrganizador = mongoose.model(
  "SolicitudSerOrganizador",
  new mongoose.Schema({
    name: String,
    email: String,
    place: String,
    description: String,
  })
);

module.exports = SolicitudSerOrganizador;