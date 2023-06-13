const User = require("../models/user.model");
const GameZip = require("../models/gameZip.model");

exports.updateParticipantTeam = (req, res) => {

    User.findOneAndUpdate(
        { _id: req.body.id },
        { $set: { team: req.body.equipo } },
        { new: true, useFindAndModify: false }
    )
        .then((response) => {
            if (!response) {
                return res.status(404).send({ message: "No se logró unir al equipo" });
            }
            res.send({ message: "Actualizado exitosamente", response: response });
        })
        .catch((err) => {
            res.status(500).send({ message: err });
        });
};

exports.updateGameState = (req, res) => {
    GameZip.findOneAndUpdate(
        { name: req.body.name },
        { $set: { state: req.body.state } },
        { new: true, useFindAndModify: false }
    )
        .then((response) => {
            if (!response) {
                return res.status(404).send({ message: "No se logró" });
            }
            res.send({ message: "Actualizado exitosamente", response: response });
        })
        .catch((err) => {
            res.status(500).send({ message: err });
        });
};
