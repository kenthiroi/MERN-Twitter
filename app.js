const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./keys").mongoURI;


app.get("/", (req, res) => {
  res.send("Hello World!")
});

const port = process.env.port || 5000;

app.listen(port, ()=> {console.log(`Listening on port ${port}`)});