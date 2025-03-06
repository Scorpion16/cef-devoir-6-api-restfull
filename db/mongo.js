const mongoose = require("mongoose");

const dbInit = {
    dbName : "port-plaisance-russell"
}

//Verification si la connexion se fait avec la BDD Mongo
exports.connexionDB = async () => {
    try {
        await mongoose.connect(process.env.URL_MONGO,  dbInit);
        console.log("Connecté");
    } catch(error) {
        console.log(error);
        throw error;
    }
}
