const mongoose = require("mongoose");

//Création du schéma castaway
const castawaySchema = new mongoose.Schema({
    catwayNumber : {
        type : Number,
        trim: true,
        required: [true, "Le numéro de cataway est requis"]
    },
    catwayType : {
        type : String,
        trim: true
    },
    catwayState : {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

//Exportation de cette page
module.exports = mongoose.model("Castaway", castawaySchema);