import api from "../utils/api";



export const createConversation = async () => {
    const response = await api.post("/api/conversations", {});


    return response.data;
};



export const getConversations = async () => {
    const response = await api.get("/api/conversations");


    return response.data;
};

export const getConversation = async (id) => {
    const response = await api.get(`/api/conversations/${id}`);
    return response.data;
};