let express = require('express');
let app = express();

console.log("Hello World");

app.get("/", function(req, res) {
    res.send('Hello Express');
    resizeBy.send("oyoyoyoyooyoyoyoyoyo");
  }
);

app.get("/", (req, res)=>{
    res.sendFile(`views/index.html`);
})































 module.exports = app;
