import api from "../utils/api";

export const uploadDocument = async (file, conversationId) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("conversationId", conversationId);

  const response = await api.post("/api/documents/upload", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data.document;
};

export const getDocuments = async (conversationId) => {
  const response = await api.get("/api/documents", {
    params: conversationId ? { conversationId } : {},
  });
  return response.data.documents;
};

export const deleteDocument = async (id) => api.delete(`/api/documents/${id}`);