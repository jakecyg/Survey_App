const passport = require("passport");

module.exports = (app) => {
  // Setup path for Goole OAuth callback
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  // Sign current user out being passport function
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // Return current user
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
