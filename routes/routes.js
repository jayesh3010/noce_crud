const express = require('express');
const router = express.Router();
const Studant = require('../models/studants')

router.get('/', (req, res) => {
    res.render('index',{
        title: 'Home Page'
    });
});

router.get('/addstudant', (req, res)=>{
    res.render('add_students',{
        title: 'Add Students'
    })
});

router.post('/addstudant', (req, res)=>{
    console.log(req);
    res.redirect('/');
});

module.exports = router;

