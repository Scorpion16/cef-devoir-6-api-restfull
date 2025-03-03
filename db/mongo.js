const mongoose = require("mongoose");

const dbInit = {
    useNewUrlParser : true,
    dbName : "port-plaisance-russell"
}

exports.connexionDB = async () => {
    try {
        await mongoose.connect(process.env.URL_MONGO,  dbInit);
        console.log("Connecté");
    } catch(error) {
        console.log(error);
        throw error;
    }
}
