const express = require('express');
const path = require('path');
const fs = require("fs");
const multer = require('multer');
const dirPath = path.join(__dirname, '../database/projects.json');
let projects = JSON.parse(fs.readFileSync(dirPath, 'utf-8'));

const projectsController = {
    home: (req, res) => {
        res.render('projects', { projects: projects });
    },
    list: (req, res) => {
        res.render('list-projects', { projects: projects });
    }
}


module.exports = projectsController;