// NODE env variable exists within heroku runtime- determines the current environment
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev.js");
}
