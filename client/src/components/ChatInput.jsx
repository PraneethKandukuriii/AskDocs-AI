import { useRef, useState } from "react";
import { ArrowUp, Paperclip, X } from "lucide-react";

const ChatInput = ({ onSend, initialValue = "", disabled = false }) => {
  const [value, setValue] = useState(initialValue);
  const [attachment, setAttachment] = useState(null);

  const fileInputRef = useRef(null);

  const submit = (event) => {
    event.preventDefault();

    const message = value.trim();

    if (!message && !attachment) return;

    onSend(message, attachment);

    setValue("");
    setAttachment(null);
  };

  return (
    <form onSubmit={submit} className="w-full">

      {/* Attachment Preview */}
      {attachment && (
        <div className="mb-2 flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-sm text-zinc-300">
          <span className="truncate">
            {attachment.name}
          </span>

          <button
            type="button"
            onClick={() => setAttachment(null)}
            className="text-zinc-400 transition hover:text-white"
            aria-label="Remove attachment"
          >
            <X size={16} />
          </button>
        </div>
      )}


      <div className="flex items-end gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">

        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(event) =>
            setAttachment(event.target.files?.[0] || null)
          }
          disabled={disabled}
        />


        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={disabled}
          className="mb-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-zinc-400 transition hover:bg-white/[0.08] hover:text-white"
          aria-label="Attach a document"
        >
          <Paperclip size={20} />
        </button>


        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter" && !event.shiftKey) {
              submit(event);
            }
          }}
          rows={1}
          disabled={disabled}
          placeholder="Ask anything about your documents..."
          className="max-h-32 min-h-10 flex-1 resize-none bg-transparent py-2 text-sm leading-6 text-white outline-none placeholder:text-zinc-500"
        />


        <button
          type="submit"
          disabled={disabled || (!value.trim() && !attachment)}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-black transition hover:scale-[1.03] hover:bg-zinc-200 active:scale-95 disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-zinc-500"
          aria-label="Send message"
        >
          <ArrowUp size={19} strokeWidth={2.5} />
        </button>

      </div>

    </form>
  );
};

export default ChatInput;
