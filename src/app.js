const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: 'Address to get weather for.',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (error, results) => {
    if (error) {
        console.log(error);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (error, weatherResults) => {
            if (error) {
                console.log(error);
            } else {
                console.log(`Temperature: ${weatherResults.temperature}.\nReal Feel: ${weatherResults.apparentTemperature}.`);
            }
        });
    }
});