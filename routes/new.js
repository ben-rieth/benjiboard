const express = require('express');
const router = express.Router();

const Message = require('./../models/message')

router.get('/', (_req, res) => {
    res.render('new', {title: 'New Message'});
});

router.post('/', async (req, res) => {
    const message = new Message(req.body);

    try {
        await message.save();
    } catch(err) {
        console.log(err);
    }

    res.redirect('/');
})

module.exports = router;