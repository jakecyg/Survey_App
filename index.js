// https://boiling-oasis-06184.herokuapp.com/
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();
require("./routes/authRoutes")(app);

// Heroku injects port number as environment variable at runtime when deployed
// If there's a env var from heroku = i.e. deployed = use env var, otherwise i.e. dev = 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
