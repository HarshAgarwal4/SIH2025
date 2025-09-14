import express from 'express';
import { generateChat } from '../controllers/chatbot.js';
let chatBotRouter = express.Router()

chatBotRouter.post('/chat' , generateChat)

export {chatBotRouter}