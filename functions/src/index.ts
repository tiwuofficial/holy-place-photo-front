const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set("view engine","ejs");
app.use(express.static('public'));

app.get("/",function(req: any,res: any){
    const data = {
        items: [
            {name: "<h1>f</h1>"},
            {name: "<h2>バナナ</h2>"},
            {name: "<h3>スイカ</h3>"}
        ]
    };
    res.render("./index.ejs", data);
});

app.get("/hoge",function(req: any,res: any){
    const data = {
        items: [
            {name: "<h1>hoge</h1>"},
            {name: "<h2>hoge</h2>"},
            {name: "<h3>hoge</h3>"}
        ]
    };
    res.render("./index.ejs", data);
});

exports.app = functions.https.onRequest(app);