const request = require('request');
const yargs = require('yargs');

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

// Convert user input to URI formatting.
let encodedAddress = encodeURIComponent(argv.address);

// request object
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log('Unable to connect to Google server.');
    } else if (body.status === 'ZERO_RESULTS') {
        console.log('Unable to locate address.');
    } else if (body.status === 'OK') {
        // Display the address, latitude, longitude from request body object.
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});