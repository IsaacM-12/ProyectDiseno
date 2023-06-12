const mongoose = require("mongoose");

const SolicitudSerOrganizador = mongoose.model(
  "SolicitudSerOrganizador",
  new mongoose.Schema({
    name: String
  })
);

module.exports = SolicitudSerOrganizador;