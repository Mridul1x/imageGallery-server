const express = require("express");
const app = express();
const images = require("./data.json");
const port = 5000;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Image Gallery Server");
});

app.get("/images", (req, res) => {
  res.send(images);
});

app.listen(port, () => {
  console.log(`My phone server is running on port: ${port}`);
});
