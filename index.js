const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express()
const PORT = 8000;

const article = [];

app.get('/news', (req, res) => {
   axios.get("https://www.nigerianfoodtv.com/nigerian-food-recipes/")
   .then((response) => {
       const html = response.data;
       const $ = cheerio.load(html);
       $('a:contains("recipe")')
   })
})

app.listen(PORT, () => console.log(`the app is running on ${PORT}`));