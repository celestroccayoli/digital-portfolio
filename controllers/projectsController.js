const express = require('express');
const path = require('path');
const fs = require("fs");
const multer = require('multer');
const dirPath = path.join(__dirname, '../database/projects.json');
let projects = JSON.parse(fs.readFileSync(dirPath, 'utf-8'));

const projectsController = {
    list: (req, res) => {
        res.render('projects', { projects: projects });
    },
    detail: (req, res) => {
      let project =  projects[req.params.id -1] 
     res.render('detail-project', {
         project : project
     })
    }
}


module.exports = projectsController;