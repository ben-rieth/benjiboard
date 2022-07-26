const express = require('express');
const router = express.Router();

const messages = [
    {
        text: 'Hello there!',
        user: 'Benji',
        added: new Date()
    },
    {
        text: 'Another message',
        user: 'Alison',
        added: new Date()
    }
]
router.get('/', (_req, res) => {
    res.render('index', {title: "Home", messages});
});

module.exports = router;