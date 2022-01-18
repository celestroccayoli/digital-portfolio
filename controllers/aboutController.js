const express = require('express');
const path = require('path');
const fs = require("fs");
const multer = require('multer');
const dirPath = path.join(__dirname, '../database/blogs.json');
let blogs = JSON.parse(fs.readFileSync(dirPath, 'utf-8'));



const aboutController = {
    blog: (req, res) => {
        res.render('blog', { blogs: blogs});
    },
    detail: (req, res) => {
        let blog =  blogs[req.params.id -1] 
       res.render('detail-blog', { blog : blog })
      },
    skills: (req, res) => {
        res.render('skills');
    },
    me: (req, res) => {
        res.render('about');
    }
    
    
}


module.exports = aboutController;