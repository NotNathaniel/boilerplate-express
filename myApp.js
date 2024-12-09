let express = require('express');
let app = express();

console.log("Hello World");

/*
app.get("/", function(req, res) {
    res.send("Hello Express");
  }
);
*/
app.get("/json", (req, res)=>{
  res.json({"message": "Hello json"});
});

app.get("/", (req, res)=>{
    res.sendFile(`${__dirname}/views/index.html`);
});

































 module.exports = app;
