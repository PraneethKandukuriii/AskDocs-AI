import Document from "../models/Document.js";
import Conversation from "../models/conversationModel.js";
import FormData from "form-data";
import { deleteDocumentFromAI, uploadToAI } from "../services/aiService.js";

export const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const { conversationId } = req.body;
    if (!conversationId) {
      return res.status(400).json({ success: false, message: "Conversation id is required" });
    }

    const conversation = await Conversation.findOne({
      _id: conversationId,
      user: req.user._id,
    });

    if (!conversation) {
      return res.status(404).json({ success: false, message: "Conversation not found" });
    }

    const existingDocument = await Document.findOne({ conversation: conversation._id });
    if (existingDocument) {
      return res.status(400).json({
        success: false,
        message: "This conversation already has a document. Delete it or start a new conversation to upload another.",
      });
    }

    const document = new Document({
      user: req.user._id,
      conversation: conversation._id,
      originalName: req.file.originalname,
      fileName: req.file.originalname,
      filePath: `ai://${req.file.originalname}`,
      fileSize: req.file.size,
      mimeType: req.file.mimetype,
    });

    const formData = new FormData();
    formData.append("file", req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });
    formData.append("userId", req.user._id.toString());
    formData.append("conversationId", conversation._id.toString());
    formData.append("documentId", document._id.toString());

    await uploadToAI(formData);
    await document.save();

    res.status(201).json({
      success: true,
      message: "Document uploaded successfully",
      document,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDocuments = async (req, res) => {
  try {
    const { conversationId } = req.query;
    const filter = { user: req.user._id };
    if (conversationId) {
      filter.conversation = conversationId;
    }

    const documents = await Document.find(filter).sort({ createdAt: -1 });

    res.json({
      success: true,
      documents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteDocument = async (req, res) => {
  try {
    const document = await Document.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
      });
    }

    await deleteDocumentFromAI(document._id.toString());
    await document.deleteOne();

    res.json({
      success: true,
      message: "Document deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};