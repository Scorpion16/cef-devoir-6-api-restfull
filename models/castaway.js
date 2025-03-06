const mongoose = require("mongoose");

//Création du schéma castaway
const castawaySchema = new mongoose.Schema({
    catwayNumber : {
        type : Number,
        trim: true
    },
    clientName : {
        type : String,
        trim: true,
        required: [true, "Le nom et prénom est requis"]
    },
    boatName : {
        type: String,
        trim: true,
        required: [true, "Le nom du bateau est requis"]
    },
    startDate : {
        type : Number,
        trim: true,
        required: [true, "La date de début est requis"]
    },
    endDate : {
        type : Number,
        trim: true,
        required: [true, "La date de fin est requis"]
    }
    
}, {
    timestamps: true
});

//Exportation de cette page
module.exports = mongoose.model("Castaway", castawaySchema);