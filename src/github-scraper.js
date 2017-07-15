require('dotenv').config();
const uniq = require('lodash/uniq');
const rp = require('request-promise');
const teamUrls = uniq(require('./team-names.js'));
const CronJob = require('cron').CronJob;

new CronJob('* * */1 * * *', getTeamData, null, true, 'America/Los_Angeles');

function getTeamData() {

    teamUrls.forEach(function (teamUrl) {
        let options = {
            uri: teamUrl,
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
            uri: teamUrl + '/repos',
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

};