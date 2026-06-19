const express = require('express');
const aiResponse = require('../controllers/ai.controller')

const router = express.Router();


router.post('/get-review', aiResponse.aiResponseController)

module.exports = router;