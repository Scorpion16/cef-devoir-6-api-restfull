const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Création du schéma utilisateur
const userSchema = new mongoose.Schema({
    username : {
        type : String,
        trim: true,
        required: [true, "Le pseudo est requis"]
    },
    email : {
        type: String,
        trim: true,
        required: [true, "L'e-mail est requis"],
        unique: true,
        lowercase: true
    },
    password : {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

userSchema.pre("save", function(next){
    if (!this.isModified("password")) {
        return next();
    }

    this.password = bcrypt.hashSync(this.password, 10);
    next();
})

//Exportation de cette page
module.exports = mongoose.model("User", userSchema);