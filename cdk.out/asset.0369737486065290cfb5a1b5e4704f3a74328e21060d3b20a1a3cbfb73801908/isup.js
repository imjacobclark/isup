const https = require('https');

const get = url => {
    return new Promise((resolve, reject) => {
        https.get(url, (resp) => {
            resp.on('data', (chunk) => {
                resolve();
            });
        }).on("error", (err) => {
            reject();
        });
    });
}

exports.main = async function (event, context, callback) {
    try {
        const urlToPing = event["queryStringParameters"]['url'];

        get(urlToPing).then(() => {
            console.log("here 1")
            console.log(urlToPing)
            callback(null, {
                statusCode: 200,
                headers: {},
                body: JSON.stringify({url: urlToPing, status: "up" })
            });
        }).catch(err => {
            console.log("here 2", err)
            callback(null, {
                statusCode: 500,
                headers: {},
                body: JSON.stringify({url: urlToPing, status: "down" })
            });
        });
    } catch (error) {
        console.log("error", error);

        const body = error.stack || JSON.stringify(error, null, 2);
        
        callback(null, {
            statusCode: 400,
            headers: {},
            body: JSON.stringify(body)
        });
    }
}