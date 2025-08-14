const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.download(path.join(__dirname, "cnpj_setup.exe"));
});

app.listen(7777, () => {
  console.log("Local server running on http://localhost:7777");
});
