import { useCallback, useEffect, useState } from "react";
import { FileText, Lightbulb, Search } from "lucide-react";

import ChatInput from "../components/ChatInput";
import { useAuth } from "../context/AuthContext";
import { sendMessageToAI } from "../services/chatService";
import { createConversation, getConversation } from "../services/conversationService";
import { uploadDocument } from "../services/documentService";

const Chat = () => {
  const { user } = useAuth();
  const firstName = user?.name?.trim().split(/\s+/)[0] || "there";
  const [messages, setMessages] = useState([]);
  const [conversationId, setConversationId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const loadConversation = useCallback(async () => {
    setLoading(true);
    try {
      let id = localStorage.getItem("conversationId");
      if (!id) {
        const conversation = await createConversation();
        id = conversation._id;
        localStorage.setItem("conversationId", id);
        window.dispatchEvent(new Event("conversationcreated"));
      }
      const conversation = await getConversation(id);
      setConversationId(conversation._id);
      setMessages(conversation.messages.map((message, index) => ({
        id: `${message._id || index}-${message.createdAt}`,
        content: message.content,
        sender: message.role === "assistant" ? "ai" : "user",
        sources: message.sources || [],
      })));
    } catch (error) {
      console.error("Unable to load conversation", error);
      localStorage.removeItem("conversationId");
      setConversationId(null);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadConversation();
    window.addEventListener("conversationchange", loadConversation);
    return () => window.removeEventListener("conversationchange", loadConversation);
  }, [loadConversation]);

  const sendMessage = async (content, attachment) => {
    if (!conversationId || sending) return;
    const question = content.trim() || "Please summarize this document.";
    const userMessage = {
      id: `user-${Date.now()}`,
      content: question,
      attachment,
      sender: "user",
    };
    setMessages((current) => [...current, userMessage]);
    setSending(true);

    try {
      if (attachment) {
        await uploadDocument(attachment, conversationId);
        // Refresh the sidebar's document list as soon as the upload itself
        // succeeds — don't wait on the chat call, which can fail
        // independently (e.g. the LLM provider erroring out) and would
        // otherwise leave a successfully-uploaded document invisible.
        window.dispatchEvent(new Event("documentchange"));
      }
      const response = await sendMessageToAI(question, conversationId);
      setMessages((current) => [...current, {
        id: `ai-${Date.now()}`,
        content: response.answer,
        sender: "ai",
        sources: response.sources || [],
      }]);
    } catch (error) {
      console.error("AI error", error);
      setMessages((current) => [...current, {
        id: `error-${Date.now()}`,
        content: error.response?.data?.message || "Sorry, something went wrong while processing your request.",
        sender: "ai",
      }]);
    } finally {
      setSending(false);
    }
  };

  const suggestions = [
    { label: "Summarize my document", prompt: "Summarize the key points in my document.", icon: FileText },
    { label: "Find key insights", prompt: "Find the most important insights in my document.", icon: Search },
    { label: "Explain this PDF", prompt: "Explain this PDF in simple terms.", icon: Lightbulb },
  ];

  if (loading) return <div className="grid h-full place-items-center text-sm text-zinc-400">Loading conversation…</div>;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      {messages.length === 0 ? (
        <div className="flex h-full flex-col justify-center px-5 sm:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Hello {firstName} 👋</h1>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">What can I help you understand today?</p>
          <div className="mt-8"><ChatInput onSend={sendMessage} disabled={sending} /></div>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {suggestions.map(({ label, prompt, icon: Icon }) => (
              <button key={label} onClick={() => sendMessage(prompt)} disabled={sending} className="group flex items-center gap-3 rounded-xl border border-white/[0.09] bg-white/[0.02] p-3 text-left text-sm text-zinc-400 transition hover:bg-white/[0.06] hover:text-white disabled:opacity-50">
                <Icon size={16} className="text-zinc-500 group-hover:text-violet-300" /> {label}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="flex-1 overflow-y-auto px-5 py-8 sm:px-8"><div className="mx-auto max-w-3xl space-y-5">
            {messages.map((message) => <div key={message.id} className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.sender === "user" ? "ml-auto rounded-br-md bg-violet-600 text-white" : "mr-auto rounded-bl-md border border-white/[0.08] bg-white/[0.04] text-zinc-300"}`}>
              {message.attachment && <div className="mb-2 flex items-center gap-2 text-xs"><FileText size={14} />{message.attachment.name}</div>}
              {message.content}
              {message.sender === "ai" && message.sources?.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 border-t border-white/[0.08] pt-2">
                  {message.sources.map((source, index) => (
                    <span key={`${source.filename}-${source.page}-${index}`} className="rounded-md bg-white/[0.06] px-2 py-1 text-xs text-zinc-400">
                      {source.filename}, p.{source.page}
                    </span>
                  ))}
                </div>
              )}
            </div>)}
            {sending && <div className="mr-auto rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-zinc-400">Thinking…</div>}
          </div></div>
          <div className="border-t border-white/[0.08] bg-black px-5 py-4 sm:px-8"><div className="mx-auto max-w-3xl"><ChatInput onSend={sendMessage} disabled={sending} /></div></div>
        </>
      )}
    </div>
  );
};

export default Chat;