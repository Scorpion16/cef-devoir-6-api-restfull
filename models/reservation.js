const mongoose = require("mongoose");

//Création du schéma réservation
const reservationSchema = new mongoose.Schema({
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
    }
    
}, {
    timestamps: true
});

//Exportation de cette page
module.exports = mongoose.model("Reservation", reservationSchema);