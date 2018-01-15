const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=515%20Dori%20Place%20new%20jersey',
    json: true
}, (error, response, body) => {
    console.log(body);
});