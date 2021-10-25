// https://boiling-oasis-06184.herokuapp.com/
const express = require("express");
require("./services/passport");

const app = express();
require("./routes/authRoutes")(app);

// Heroku injects port number as environment variable at runtime when deployed
// If there's a env var from heroku = i.e. deployed = use env var, otherwise i.e. dev = 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
