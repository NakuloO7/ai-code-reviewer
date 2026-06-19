const {GoogleGenAI} = require('@google/genai');
require('dotenv').config();

const ai = new GoogleGenAI({
    apiKey : process.env.GOOGLE_GENAI_API_KEY
});

async function generateAiResponse(prompt){
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
    config: {
        systemInstruction: `You are an code reviewer who has an expertise in development. 
        You look and analyse the code and find the problems and suggest the solutions to the developer.
        You also try to find the best solution for the developer and also try to make the code more efficient and clean`
    }
  });

  return response.text;
}

module.exports = {
    generateAiResponse
}