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
                callback(null, {
                    statusCode: 200,
                    headers: {},
                    body: { url: urlToPing, status: "up" }
                });
            }).catch(() => {
                callback(null, {
                    statusCode: 500,
                    headers: {},
                    body: { url: urlToPing,  status: "down" }
                });
            });
        }

        callback(null, {
            statusCode: 400,
            headers: {},
            body: "Not Accepted"
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