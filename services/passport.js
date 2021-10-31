const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");
const User = mongoose.model("users"); //fetch

// Setup passport.js
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googeClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      //done == tells passport that you're done
      // If user with googleId doesnt already exist
      // *Any time you make a call to mongo(wheter get or set or anything) you are initiating an async operation
      // I.e. you cant directly assign User.findOne to a variable- it returns a promise
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        //existing user response object is a model instance of the User model
        if (existingUser) {
          // user already exists
          //   error, user record
          done(null, existingUser);
        } else {
          // Save google Id from the oauth callback to the db- this is the unique id per google email account that you can assume to be unique until the end of google services
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
