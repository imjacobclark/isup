const https = require('https');

const get = url => {
    return new Promise((resolve, reject) => {
        console.log("here 3")
        https.get(url, (resp) => {
            let data = '';
            console.log("here 4")
            resp.on('data', (chunk) => {
                console.log("here 5")
                data += chunk;
            });

            resp.on('end', () => {
                console.log("here 6")
                resolve(data);
            });

        }).on("error", (err) => {
            console.log("here 7")
            reject(err);
        });
    });
}

exports.main = async function (event, context, callback) {
    try {
        const urlToPing = event["queryStringParameters"]['url'];

        get(urlToPing).then(() => {
            console.log("here 1")
            callback(null, {
                statusCode: 200,
                headers: {},
                body: { url: urlToPing, status: "up" }
            });
        }).catch(() => {
            console.log("here 2")
            callback(null, {
                statusCode: 500,
                headers: {},
                body: { url: urlToPing,  status: "down" }
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