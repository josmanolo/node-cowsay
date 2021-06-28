const express = require("express");
const app = express();
const cowsay = require("cowsay");

app.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send(cowsay.think({
        text : "Modulo Nivelador",
        e : "OO",
        T : "U "
    }));
});

app.listen(3001, () => {
    console.log("SERVER PORT 3001");
})

