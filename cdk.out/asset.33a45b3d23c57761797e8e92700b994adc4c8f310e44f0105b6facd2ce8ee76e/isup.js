const axios = require('axios');

exports.main = async function (event, context, callback) {
    try {
        const urlToPing = event["queryStringParameters"]['url'];
        console.log(urlToPing);

        axios.get(urlToPing).then(data => {
            console.log(data);

            callback(null, {
                statusCode: 200,
                headers: {},
                body: JSON.stringify({url: urlToPing, status: "up" })
            });
        }).catch(err => {
            console.log(err);

            callback(null, {
                statusCode: 500,
                headers: {},
                body: JSON.stringify({url: urlToPing, status: "down" })
            });
        });
    } catch (err) {
        console.log(err);
        const body = error.stack || JSON.stringify(error, null, 2);
        
        callback(null, {
            statusCode: 400,
            headers: {},
            body: JSON.stringify(body)
        });
    }
}