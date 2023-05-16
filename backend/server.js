const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const path = require("path");
const http = require("http");

const dbConfig = require("./app/config/db.config");

const app = express();



//app.use("/", express.static('build'));
app.use(express.static('build')); // All client-side files are stored in build folder

app.get('/', (req, res) => {
  res.sendFile('index.html', {root:'build'});
});

// Let Angular handle all help-* routes
app.get('/login', (req, res) => {
  res.sendFile('index.html', {root:'build'});
});

app.get('/register', (req, res) => {
  res.sendFile('index.html', {root:'build'});
});

app.get('/profile', (req, res) => {
  res.sendFile('index.html', {root:'build'});
});

app.get('/participante', (req, res) => {
  res.sendFile('index.html', {root:'build'});
});

app.get('/uploadFile', (req, res) => {
  res.sendFile('index.html', {root:'build'});
});

app.get('/organizadorglobal', (req, res) => {
  res.sendFile('index.html', {root:'build'});
});

app.get('/juez', (req, res) => {
  res.sendFile('index.html', {root:'build'});
});

app.get('/home', (req, res) => {
  res.sendFile('index.html', {root:'build'});
});

//app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: "GameJam-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

const db = require("./app/models");
const Role = db.role;

db.mongoose
  .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

// simple route
/*app.get("/", (req, res) => {
  res.json({ message: "Welcome to GameJam application." });
});*/

// routes
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "participante"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'participante' to roles collection");
      });

      new Role({
        name: "juez"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'juez' to roles collection");
      });

      new Role({
        name: "organizadorGlobal"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'organizadorGlobal' to roles collection");
      });

    }
  });
}
