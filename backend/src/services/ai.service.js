const {GoogleGenAI} = require('@google/genai');
require('dotenv').config();

const ai = new GoogleGenAI({
    apiKey : process.env.GOOGLE_GENAI_API_KEY
});

async function generateAiResponse(prompt){
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
  });

  return response.text;
}

module.exports = {
    generateAiResponse
}