import axios from "axios";

const AI_URL = process.env.AI_SERVICE_URL;


export const uploadDocument = async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    const response = await axios.post(
        `${AI_URL}/api/upload`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
    );

    return response.data;
};



export const askAI = async (question) => {

    const response = await axios.post(
        `${AI_URL}/api/chat`,
        {
            question
        }
    );

    return response.data;
};