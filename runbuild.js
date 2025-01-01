const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();

app.use(logger("dev"));

app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3002;

app.listen(port, () => {
   
});
