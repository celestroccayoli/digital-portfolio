const express = require('express');
const path = require('path');
const fs = require("fs");
const multer = require('multer');


const homeController = {
    home: (req, res) => {
        res.render('home');
    },
    list: (req, res) => {
        res.render('home');
    },
    galery: (req, res) => {
        res.render('home');
    }
}


module.exports = homeController;
