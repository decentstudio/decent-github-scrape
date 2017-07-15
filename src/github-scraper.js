require('dotenv').config();
const rp = require('request-promise');
const teamNames = require('./team-names.js');

teamNames.forEach(function (teamName) {
    let options = {
        uri: 'https://api.github.com/orgs/' + teamName,
        qs: {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };

    rp(options)
        .then(function (response) {
            console.log(response)
        });

    options = {
        uri: 'https://api.github.com/orgs/' + teamName + '/repos',
        qs: {
           client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };

    rp(options)
        .then(function (response) {
            console.log(response)
        });

});