const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const controllerUpload = require("../controllers/upload.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/signout", controller.signout);

  app.post("/api/auth/uploadLink", controllerUpload.uploadLink);

  app.post("/api/auth/uploadGameZip", controllerUpload.uploadGameZip);

  app.post("/api/auth/createTeam", controllerUpload.createTeam);
};
