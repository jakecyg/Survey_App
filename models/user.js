const mongoose = require("mongoose");
const { Schema } = mongoose; //destructuring; es2015
const userSchema = new Schema({
  googleId: String,
});

// this tells mongoose to create collections called users with the userSchema
// if already exists will skip
mongoose.model("users", userSchema);
