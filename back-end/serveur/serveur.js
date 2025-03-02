const express = require(express);
const app = express();


const port = 3000;

app.get("/", function(err, req, res){
    if (err) {
        console.log("une erreur s'est produit");
    } else {
        res.render(__dirname + "/index.html");
    }
});




app.listen(port, function(){
    console.log("Le port : " + port + " est actif");
});