exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.participanteBoard = (req, res) => {
  res.status(200).send("Participante Content.");
};

exports.juezBoard = (req, res) => {
  res.status(200).send("Juez Content.");
};

exports.organizadorGlobalBoard = (req, res) => {
  res.status(200).send("Organizador Global Content.");
};
