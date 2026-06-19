const express = require('express');
const aiResponse = require('../controllers/ai.controller')

const router = express.Router();


router.get('/get-response', aiResponse.aiResponseController)

module.exports = router;