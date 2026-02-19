const express = require('express');
const router = express.Router();
const links = require("../model/linkSchema")

router.get("/", async(req, res) => {
    if(!req.user) return res.redirect('/login');
    const allLinks = await links.find({createdBy: req.user._id});
    return res.render('home', {"allLinks": allLinks});
})

router.get('/signup', (req, res)=>{
    res.render('signUp')
})

router.get('/login', (req, res)=>{
    res.render('login')
})

module.exports = router