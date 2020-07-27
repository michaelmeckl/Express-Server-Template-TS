import express from "express";

const app = express();

function initRoutes() {
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
}

function startServer() {
  const port = 8000;
  app.listen(port, (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log(`Server started at http://localhost:${port}`);
  });
}

function init() {
  initRoutes();
  startServer();
}

init();
