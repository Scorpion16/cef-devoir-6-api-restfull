const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema({
    pseudo : String,
    mdp : String
});

module.exports = mongoose.model("User", userSchema);