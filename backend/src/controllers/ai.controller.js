const {generateAiResponse} = require('../services/ai.service')

async function aiResponseController(req, res) {
    const code = req.body.code;
    if (!code){
        return res.status(400).json({
            message : "prompt is required!"
        })
    }

    const response = await generateAiResponse(code);

    res.send(response)
}

module.exports = {
    aiResponseController
}


