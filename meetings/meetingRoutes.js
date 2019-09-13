const express = require("express");
const router = express.Router();
const Meetingctrl = require('./meetingControllers');
const mailController = require('../mail/mailControllers');

function getMeet(req, res) {
    Meetingctrl.getMeet()
        .then(data => {
            mailController.postMail(data)
                .then(result => {
                    // res.status(200).json(result)
                    res.send(`<h3>Meeting started at ${data}.</h3><br><h4>Members:</h4><br><p>${result}</p>`)
                })
                .catch(err => {
                    res.status(500).json({
                        "error": err
                    })
                })
                // res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({
                "error": err
            })
        })
}

router.get('/', getMeet)

module.exports = router