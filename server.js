const express = require("express");
const path = require("path");

const server = express();
const port = process.env.PORT || 3300;

server.use(express.static(path.join(__dirname, "public")));

server.get("/", (req, res) => {
  res.sendFile("/index.html");
});

server.listen(port, (err) => {
  if (!err) {
    console.log("Server Live On http://localhost:3300");
  } else {
    console.log("Error While Running Server");
  }
});
