const mongoose = require("mongoose");

//Création du schéma réservation
const reservationSchema = new mongoose.Schema({
    catwayNumber : {
        type : Number,
        trim: true,
        required: [true, "Le numéro de cataway est requis"]
    },
    clientName : {
        type : String,
        trim: true,
        required: [true, "Le nom et prénom est requis"]
    },
    boatName : {
        type: String,
        trim: true
    },
    startDate : {
        type : String,
        trim: true
    },
    endDate : {
        type : String,
        trim: true
    }
    
}, {
    timestamps: true
});

//Exportation de cette page
module.exports = mongoose.model("Reservation", reservationSchema);