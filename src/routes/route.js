
const express = require('express');
const router = express.Router();

const urlController = require('../controllers/urlController')


router.post('/url/shorten', urlController.shortenUrl)
router.get('/:urlCode', urlController.getUrl)

module.exports = router
