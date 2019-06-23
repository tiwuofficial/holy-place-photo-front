const functions = require('firebase-functions');
const express = require('express');
const app = express();

app.set("view engine","ejs");
app.use(express.static('public'));

app.get("/",function(req: any,res: any){
    const data = {
        title: '【Holy Place Photo】アニメの聖地の写真の共有サイト',
        description: 'アニメの聖地で撮った写真を共有できるサイトです。好きなアニメの聖地の写真を投稿したり、聖地を地図から探したりして楽しんでください。'
    };
    res.render("./index.ejs", data);
});

app.get("/about",function(req: any,res: any){
    const data = {
        title: '【Holy Place Photo】サイトについて',
        description: 'Holy Place Photoについての説明です。'
    };
    res.render("./about.ejs", data);
});

exports.app = functions.https.onRequest(app);