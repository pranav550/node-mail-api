const rp = require('request')

class MeetingController {
    constructor() {

    }

    getMeet() {
        return new Promise((resolve, reject) => {
            var options = {
                url: "https://api.zoom.us/v2/meetings/206769731",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IkVGaEJLblJhU0hhZXgzbV9lclNPd2ciLCJleHAiOjE1Njc1OTU3NzMsImlhdCI6MTU2Njk5MDk3N30.XYVlyp1-5jN2rhhRNKIv63gSdd9UXsoDk4zWWTpkO6E",
                    "Accept": "application/json"
                }
            }

            rp(options, (error, response, body) => {
                if (error) {
                    reject(error)
                }
                body = JSON.parse(body);
                var joinUrl = body.join_url;
                resolve(joinUrl);
            })
        })
    }
}

module.exports = new MeetingController();