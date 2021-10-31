// https://boiling-oasis-06184.herokuapp.com/
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = "passport";

require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();
require("./routes/authRoutes")(app);

// setup express to enable brower cookies with specific config
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //how long this cookie can exist in the browser in milliseconds
    keys: [keys.cookieKey], // key to encrypt cookie
  })
);

// set passport to use cookies for authentication
app.use(passport.initialize());
app.use(passport.session());

// Heroku injects port number as environment variable at runtime when deployed
// If there's a env var from heroku = i.e. deployed = use env var, otherwise i.e. dev = 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
