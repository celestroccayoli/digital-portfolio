const express = require('express');
const path = require('path');
const fs = require("fs");
const multer = require('multer');

let by_contacting = [];

const userController = {
    home: (req, res) => {
        res.render('form');
    },
    list: (req, res) => {
        res.render('form');
    },
    form: (req, res) => {
        res.render('form');
    },
    process: (req, res) => {
        let user = {
         id: by_contacting.length + 1 ,
         email: req.body.email,
         name: req.body.name,
         company: req.body.company,
         subject: req.body.subject,
         message: req.body.message,
        }
        by_contacting.push(user);

        console.log(by_contacting)
        res.redirect('/')
    },
}


module.exports = userController;