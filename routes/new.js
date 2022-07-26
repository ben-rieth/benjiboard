const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
    res.render('new', {title: 'New Message'});
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;