const express = require('express');
const { shortenUrl, redirectUrl } = require('../controllers/urlControllers');
const router = express.Router();

router.post('/shorten' , shortenUrl);
router.get('/:shortUrl' , redirectUrl);

module.exports = router;