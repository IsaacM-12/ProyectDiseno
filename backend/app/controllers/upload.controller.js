const config = require("../config/auth.config");
const db = require("../models");
const Team = require("../models/team.model");
const Video = db.video;
const GameZip = db.gameZip;

exports.uploadLink = (req, res) => {

  const video = new Video({
    url: req.body.url,
  });

  video.save((err, video) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "successfully!" });
  });

};

exports.uploadGameZip = (req, res) => {
  const gameZip = new GameZip({
    team: req.body.team,
    url: req.body.url,
  });

  gameZip.save((err, game) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "successfully!" });
  });
};


exports.createTeam = (req, res) => {
  const team = new Team({
    name: req.body.team
  });

  team.save((err, game) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "successfully!" });
  });
};
