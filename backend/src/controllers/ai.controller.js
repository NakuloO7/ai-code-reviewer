const {generateAiResponse} = require('../services/ai.service')

async function aiResponseController(req, res) {
    const prompt = req.query.prompt;
    if (!prompt){
        return res.status(400).json({
            message : "prompt is required!"
        })
    }

    const response = await generateAiResponse(prompt);

    res.status(200).json({
        response
    })
}

module.exports = {
    aiResponseController
}