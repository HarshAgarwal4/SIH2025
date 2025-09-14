import { GoogleGenAI } from "@google/genai";
import dotenv from 'dotenv'
dotenv.config()

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

async function generateChat(req, res) {
    let { history , msg } = req.body
    try{
        const chat = ai.chats.create({
            model: "gemini-2.5-flash",
            config: {
                systemInstruction: process.env.SystemInstructions,
                temperature: 0.1
            },
            history: history
        });
        const response = await chat.sendMessage({
            message: msg
        })
        console.log(response.text);
        return res.send({status: 1, response: response.text})
    }catch(err){
        console.log(err)
        return res.send({status:0, msg:"server error"})
    }
}

export {generateChat}