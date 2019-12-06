const https = require('https');

const get = url => {
    return new Promise((resolve, reject) => {
        https.get(url, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                resolve(data);
            });

        }).on("error", (err) => {
            reject(err);
        });
    });
}

exports.main = async function (event, context, callback) {
    try {
        const method = event.httpMethod;
        const urlToPing = event["queryStringParameters"]['url'];

        if (method === "GET") {
            get(urlToPing).then(() => {
                callback({
                    statusCode: 200,
                    headers: {},
                    body: JSON.stringify(body)
                });
            }).catch(() => {
                callback({
                    statusCode: 500,
                    headers: {},
                    body: JSON.stringify(body)
                });
            });
        }

        callback({
            statusCode: 400,
            headers: {},
            body: "We only accept GET /"
        });
    } catch (error) {
        const body = error.stack || JSON.stringify(error, null, 2);
        console.log(error);
        callback({
            statusCode: 400,
            headers: {},
            body: JSON.stringify(body)
        });
    }
}