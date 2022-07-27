const express = require('express');
const router = express.Router();

const Message = require('./../models/message');

router.get('/', async (_req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1});
        res.render('index', {title: "Home", messages});
    } catch(err) {
        res.render('error', {title: 'Error', error: error.message})
    }
    
});

module.exports = router;