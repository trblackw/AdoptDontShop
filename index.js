const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use(express.static(path.join(__dirname, "dist")));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app runnin on port ${port}`);
});
