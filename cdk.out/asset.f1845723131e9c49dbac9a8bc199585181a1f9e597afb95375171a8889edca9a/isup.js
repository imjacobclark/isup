const axios = require('axios');



exports.main = async function (event, context, callback) {
    try {
        const urlToPing = event["queryStringParameters"]['url'];

        axios.get(urlToPing).then(() => {
            callback(null, {
                statusCode: 200,
                headers: {},
                body: JSON.stringify({url: urlToPing, status: "up" })
            });
        }).catch(() => {
            callback(null, {
                statusCode: 500,
                headers: {},
                body: JSON.stringify({url: urlToPing, status: "down" })
            });
        });
    } catch (error) {
        const body = error.stack || JSON.stringify(error, null, 2);
        
        callback(null, {
            statusCode: 400,
            headers: {},
            body: JSON.stringify(body)
        });
    }
}