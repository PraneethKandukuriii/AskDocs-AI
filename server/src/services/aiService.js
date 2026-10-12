import axios from "axios";
const AI_URL = process.env.AI_SERVICE_URL;
const INTERNAL_HEADERS = {
    "X-Internal-Api-Key": process.env.AI_SERVICE_API_KEY,
};


// Chat with AI
export const askAI = async (question, scope) => {

    try {

        const response = await axios.post(
            `${AI_URL}/api/chat/`,
            {
                question,
                ...scope,
            },
            {
                headers: INTERNAL_HEADERS,
            }
        );


        return response.data;


    } catch (error) {

        console.log(
            "AI Service Error:",
            error.response?.data || error.message
        );

        throw error;
    }
};



// Upload document
export const uploadToAI = async (formData) => {

    try {

        const response = await axios.post(
            `${AI_URL}/api/upload/`,
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                    ...INTERNAL_HEADERS,
                },
            }
        );


        return response.data;


    } catch (error) {

        console.log(
            "AI Upload Error:",
            error.response?.data || error.message
        );

        throw error;
    }
};

export const deleteDocumentFromAI = async (documentId) => {
    await axios.delete(`${AI_URL}/api/upload/${documentId}`, {
        headers: INTERNAL_HEADERS,
    });
};
