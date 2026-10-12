import express from "express";
import Conversation from "../models/conversationModel.js";
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();



router.use(authMiddleware);

router.post("/", async(req,res)=>{

    try{

        const conversation =
        await Conversation.create({
            user: req.user._id,
            title: req.body?.title?.trim() || "New Conversation"

        });



        res.status(201).json(conversation);



    }catch(error){

        console.log(
            "CREATE CONVERSATION ERROR:",
            error
        );


        res.status(500).json({
            message:error.message
        });

    }

});




router.get("/", async(req,res)=>{

    try{


        const conversations =
        await Conversation.find({

            user:req.user._id

        })
        .sort({
            createdAt:-1
        });



        res.json(conversations);



    }catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});

router.get("/:id", async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!conversation) {
            return res.status(404).json({ message: "Conversation not found" });
        }

        res.json(conversation);
    } catch (error) {
        res.status(400).json({ message: "Invalid conversation id" });
    }
});




export default router;