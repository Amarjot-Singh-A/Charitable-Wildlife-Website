require('dotenv').config();

const path = require('path');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const EmailTemplate = require('email-templates').EmailTemplate
const wellknown = require('nodemailer-wellknown')

router.get('/thanks', function(req, res) {
  res.render('thanks', {
    siteTitle: 'thanks'
  });
});


module.exports = router;
