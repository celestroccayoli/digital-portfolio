const express = require('express');
const path = require('path');
const fs = require("fs");
const multer = require('multer');


const blogController = {
    home: (req, res) => {
        res.render('blog');
    },
    list: (req, res) => {
        res.render('blog');
    },
    galery: (req, res) => {
        res.render('blog');
    }
}


module.exports = blogController;