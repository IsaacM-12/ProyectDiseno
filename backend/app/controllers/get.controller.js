const Equipo = require('../models/team.model');
const GameZip = require('../models/gameZip.model');

exports.getTeams = (req, res) => {
  Equipo.find({}, 'name', (err, equipos) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Error al obtener los equipos' });
    } else {
      res.status(200).json(equipos);
    }
  });
};

exports.getGames = (req, res) => {
  GameZip.find({}, 'name', (err, juegos) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: 'Error al obtener los juegos' });
    } else {
      res.status(200).json(juegos);
    }
  });
};