const config = require("../config/auth.config");
const db = require("../models");
const Video = db.video;

exports.upload = (req, res) => {
  
  const video = new Video({
    url: req.body.url,
  });

  video.save((err, video) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
          res.send({ message: "User was registered successfully!" });
        });
      };
