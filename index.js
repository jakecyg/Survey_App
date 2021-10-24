// https://boiling-oasis-06184.herokuapp.com/

const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googeClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken) => {
      console.log(accessToken);
    }
  )
);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
// Heroku injects port number as environment variable at runtime when deployed
// If there's a env var from heroku = i.e. deployed = use env var, otherwise i.e. dev = 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
