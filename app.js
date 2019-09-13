const express = require("express");
const body_parser = require('body-parser');
const cors = require("cors");
const app = express();

app.use(cors())

const signin = require('./user/userRoutes')
const meeting = require('./meetings/meetingRoutes')
const mail = require('./mail/mailRoutes')

app.use(body_parser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/user', signin);
app.use('/meetings', meeting);
app.use('/sendmail', mail);



module.exports = app;