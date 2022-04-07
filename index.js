const PORT = 8000;
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const newspapers = [
    {
        name: "guardian",
        address: "https://www.theguardian.com/"
    }, 
    {
        name: "cnn",
        address: "https://www.cnn.com/"
    }
];

const articles = [];

app.get('/', (req, res) => {
    res.json("Welcome to our template API");
});

app.get('/news', (req, res) => {

    res.json(articles);
});

app.listen(PORT, () => console.log("Connected on port: ", PORT));
