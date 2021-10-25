const passport = require("passport");

module.exports = (app) => {
  // Setup path for Goole OAuth callback
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));
};
