const axios = require('axios');

const up = url => ({
    statusCode: 200,
    headers: { },
    body: JSON.stringify({ url: url, status: "up" })
});

const down = url => ({
    statusCode: 500,
    headers: {},
    body: JSON.stringify({ url: url, status: "down" })
});

exports.main = function (event, context, callback) {
    try {
        const urlToPing = event["queryStringParameters"]['url'];
        axios
            .get(urlToPing)
            .then(data => {
                const isup = JSON.parse(data).status === 200;
                isup ? callback(null, up(urlToPing)) : callback(null, down(urlToPing));
            })
            .catch(callback(null, down(urlToPing)));
    } catch (err) {
        callback(null, down(urlToPing))
    }
}