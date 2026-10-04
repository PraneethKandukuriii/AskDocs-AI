import { FileText, FolderOpen, MessageSquarePlus, Plus, Trash2 } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { useAuth } from "../context/AuthContext";
import { createConversation, getConversations } from "../services/conversationService";
import { deleteDocument, getDocuments, uploadDocument } from "../services/documentService";

const Sidebar = () => {
  const { user } = useAuth();
  const fileInputRef = useRef(null);
  const [conversations, setConversations] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [busy, setBusy] = useState(false);

  const loadData = useCallback(async () => {
    if (!user?.id) return;
    const activeConversationId = localStorage.getItem("conversationId");
    const [conversationData, documentData] = await Promise.all([
      getConversations(),
      getDocuments(activeConversationId),
    ]);
    setConversations(conversationData);
    setDocuments(documentData);
  }, [user?.id]);

  useEffect(() => {
    // Loading remote data after mount is intentional; the callback updates state when it resolves.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadData().catch((error) => console.error("Unable to load library", error));
    window.addEventListener("documentchange", loadData);
    window.addEventListener("conversationcreated", loadData);
    window.addEventListener("conversationchange", loadData);
    return () => {
      window.removeEventListener("documentchange", loadData);
      window.removeEventListener("conversationcreated", loadData);
      window.removeEventListener("conversationchange", loadData);
    };
  }, [loadData]);

  const openConversation = (id) => {
    localStorage.setItem("conversationId", id);
    window.dispatchEvent(new Event("conversationchange"));
  };

  const handleNewConversation = async () => {
    try {
      setBusy(true);
      const conversation = await createConversation();
      setConversations((current) => [conversation, ...current]);
      openConversation(conversation._id);
    } catch (error) {
      alert(error.response?.data?.message || "Unable to create a conversation.");
    } finally {
      setBusy(false);
    }
  };

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    let conversationId = localStorage.getItem("conversationId");
    try {
      setBusy(true);
      if (!conversationId) {
        const conversation = await createConversation();
        conversationId = conversation._id;
        setConversations((current) => [conversation, ...current]);
        openConversation(conversationId);
      }
      const document = await uploadDocument(file, conversationId);
      setDocuments((current) => [document, ...current]);
      window.dispatchEvent(new Event("documentchange"));
    } catch (error) {
      alert(error.response?.data?.message || "Document upload failed. Please use a readable PDF.");
    } finally {
      setBusy(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDocument(id);
      setDocuments((current) => current.filter((document) => document._id !== id));
    } catch (error) {
      alert(error.response?.data?.message || "Unable to delete document.");
    }
  };

  return (
    <aside className="flex h-full w-72 shrink-0 flex-col border-r border-white/[0.08] p-5">
      <div>
        <h1 className="text-xl font-semibold tracking-tight text-white">AskDocs AI</h1>
        <p className="mt-1 text-xs text-zinc-500">Transform documents into intelligent conversations</p>
      </div>

      <button onClick={handleNewConversation} disabled={busy} className="mt-7 flex h-11 items-center gap-2 rounded-xl bg-white px-3 text-sm font-medium text-black transition hover:bg-zinc-200 disabled:opacity-60">
        <MessageSquarePlus size={17} /> New conversation
      </button>

      <section className="mt-8 min-h-0 flex-1 overflow-y-auto">
        <p className="px-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">Conversations</p>
        <div className="mt-3 space-y-2">
          {conversations.map((chat) => (
            <button key={chat._id} onClick={() => openConversation(chat._id)} className="w-full rounded-xl bg-white/[0.04] px-3 py-2 text-left text-sm text-zinc-300 transition hover:bg-white/[0.08]">
              {chat.title || "New Conversation"}
            </button>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between px-2">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">Documents</p>
          <button onClick={() => fileInputRef.current?.click()} disabled={busy || documents.length > 0} className="rounded-md p-1 text-zinc-500 hover:bg-white/[0.06] disabled:opacity-30 disabled:hover:bg-transparent" aria-label="Upload document"><Plus size={16} /></button>
        </div>
        <input ref={fileInputRef} type="file" accept="application/pdf" onChange={handleUpload} className="hidden" />
        {documents.length > 0 ? (
          <p className="mt-3 rounded-xl border border-dashed border-white/[0.12] px-3 py-3 text-xs text-zinc-500">
            This conversation already has a document. Delete it below to upload a different one.
          </p>
        ) : (
          <button onClick={() => fileInputRef.current?.click()} disabled={busy} className="mt-3 flex w-full items-center gap-3 rounded-xl border border-dashed border-white/[0.12] px-3 py-3 text-left text-sm text-zinc-400 disabled:opacity-60">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.06] text-violet-300"><FolderOpen size={16} /></span>
            {busy ? "Working..." : "Upload a PDF"}
          </button>
        )}
        <div className="mt-4 space-y-2">
          {documents.length ? documents.map((document) => (
            <div key={document._id} className="flex items-center gap-2 rounded-xl bg-white/[0.035] p-3 text-sm text-zinc-300">
              <FileText size={15} className="shrink-0 text-violet-300" />
              <span className="min-w-0 flex-1 truncate">{document.originalName}</span>
              <button onClick={() => handleDelete(document._id)} className="text-zinc-500 hover:text-red-300" aria-label={`Delete ${document.originalName}`}><Trash2 size={15} /></button>
            </div>
          )) : <p className="rounded-xl bg-white/[0.035] p-3 text-xs text-zinc-500">Upload a PDF to unlock AI-powered conversations.</p>}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;