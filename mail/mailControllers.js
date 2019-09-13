const rp = require('request');
const nodemailer = require('nodemailer');

class MailController {
    constructor() {

    }

    postMail(data) {
        return new Promise((resolve, reject) => {
            let transporter = nodemailer.createTransport({
                // service: "Yahoo",
                // auth: {
                //     user: "pranav@ahex.co.in", // generated ethereal user
                //     pass: "wglibdghcpxuywfg" // generated ethereal password
                // }
                service: "Gmail",
                auth: {
                    user: "pranavverma550@gmail.com",
                    pass: "yingisptbeuudlyz"
                }
            });

            transporter.sendMail({
                    from: '"Pranav" <pranav550@gmail.com>', // sender address
                    to: 'ajeet@ahex.co.in', // list of receivers
                    subject: 'ZoomApp Test Mail', // Subject line
                    text: 'Hello world?', // plain text body
                    html: `Video Chat available at 5pm on this url: <a href="${data}">${data}</a>` // html body
                },
                (error, info) => {
                    if (error) {
                        reject(error)
                    }
                    resolve('nitesh@ahex.co.in');
                });
        })

    }
}

module.exports = new MailController();