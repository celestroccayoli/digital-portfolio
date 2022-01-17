const express = require('express');
const path = require('path');
const fs = require("fs");
const multer = require('multer');


const projectsController = {
    home: (req, res) => {
        res.render('projects');
    },
    list: (req, res) => {
        res.render('projects');
    },
    galery: (req, res) => {
        res.render('projects');
    }
}


module.exports = projectsController;