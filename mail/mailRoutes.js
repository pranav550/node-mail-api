const express = require("express");
const router = express.Router();
const Mailctrl = require('./mailControllers');

function postMail(req, res) {
    Mailctrl.postMail()
        .then(data => {
            res.status(200).json({
                "msg": data
            })
        })
        .catch(err => {
            res.status(500).json({
                "error": err
            })
        })
}

router.get('/', postMail)

module.exports = router