const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

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
        console.log(JSON.stringify(results, undefined, 2));
    }
});