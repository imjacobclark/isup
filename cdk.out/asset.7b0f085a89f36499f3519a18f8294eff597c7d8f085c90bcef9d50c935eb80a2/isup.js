const https = require('https');

const get = url => {
    return new Promise((resolve, reject) => {
        // return https.get(url, (resp) => {
            // return resp.on('data', () => {
                console.log("Pinging" + url)
                return resolve();
            // });
        // }).on("error", (err) => {
            // return reject();
        // });
    });
}

exports.main = async function (event, context, callback) {
    try {
        const urlToPing = event["queryStringParameters"]['url'];

        get(urlToPing).then(() => {
            callback(null, {
                statusCode: 200,
                headers: {},
                body: JSON.stringify({url: urlToPing, status: "up" })
            });
        }).catch(err => {
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