/**
 * Random Blog Post (/random)
 * ===
 * George Mandis (george.mand.is)
 */
 
require("dotenv").config();
const fetch = require("node-fetch");
 
exports.handler = function(event, context, callback) {
  fetch(`${process.env.URL}/_all.json`, { headers: { "Accept": "application/json" } })
    .then(res => res.json())
    .then(response => {
      const randomQuote =
        response.quotes[Math.round(Math.random() * response.quotes.length - 1)];
 
      callback(null, {
        statusCode: 302,        
        body: `Location:${process.env.URL}${randomQuote}`,
        headers: {
          "Location": `${process.env.URL}${randomQuote}`          
        }
      });
 
    });
};