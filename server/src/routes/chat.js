import express from "express";
import { askAI } from "../services/aiService.js";
import Conversation from "../models/conversationModel.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();



router.post("/", authMiddleware, async (req, res) => {

    try {

        const { question, conversationId } = req.body;

        if (!question?.trim() || !conversationId) {
            return res.status(400).json({ message: "Question and conversation id are required" });
        }

        const conversation = await Conversation.findOne({
            _id: conversationId,
            user: req.user._id,
        });

        if (!conversation) {
            return res.status(404).json({ message: "Conversation not found" });
        }

        const response = await askAI(question.trim(), {
            userId: req.user._id.toString(),
            conversationId: conversation._id.toString(),
        });

        conversation.messages.push(
            { role: "user", content: question.trim() },
            { role: "assistant", content: response.answer, sources: response.sources || [] }
        );
        if (conversation.title === "New Conversation") {
            conversation.title = question.trim().slice(0, 60);
        }
        await conversation.save();



        res.json({
            success: true,
            conversationId: conversation._id,
            answer: response.answer,
            sources: response.sources || []
        });


    } catch(error) {


        console.log(
            "Chat Error:",
            error.response?.data || error.message
        );


        res.status(500).json({
            success:false,
            message:"AI response failed"
        });

    }

});



export default router;