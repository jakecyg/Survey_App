// https://boiling-oasis-06184.herokuapp.com/
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

// Heroku injects port number as environment variable at runtime when deployed
// If there's a env var from heroku = i.e. deployed = use that, otherwise i.e. dev = 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
