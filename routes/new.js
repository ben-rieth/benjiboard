const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
    res.render('new', {title: 'New Message'});
})

module.exports = router;