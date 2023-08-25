const express = require("express");

app = express();
port = 7865;

app.get("/", (req, res) => {
  res.send("Welcome to the payment system");
});
app.get("/cart/:id([0-9]+)", (req, res) => {
  res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(port, () => console.log(`API available on localhost port ${port}`));
module.exports = app;
