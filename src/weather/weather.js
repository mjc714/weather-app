const request = require('request');

const apiKey = '003f819ff6815f37787a20349963922e';

let getWeather = (latitude, longitude, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to dark sky servers.');
        } else if (response.statusCode === 400) {
            callback('Unable to get weather data.');
        } else if (response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;