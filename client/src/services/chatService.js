import api from "../utils/api";



export const sendMessageToAI = async (
    question,
    conversationId
) => {


    const response = await api.post("/api/chat", {
            question,
            conversationId
        });


    return response.data;

};
