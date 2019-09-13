const express = require("express");
const router = express.Router();
const Homectrl = require('./userControllers');

function getUser(req, res) {
    Homectrl.getUser()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(500).json({
                "error": err
            })
        })
}

router.get('/', getUser)

module.exports = router