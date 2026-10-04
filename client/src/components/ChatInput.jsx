import { Paperclip, Send } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="
      w-full
      max-w-3xl
      bg-[#111111]
      border
      border-white/10
      rounded-2xl
      flex
      items-center
      px-5
      py-4
      gap-4
    ">

      {/* Upload */}
      <button className="text-zinc-400 hover:text-white">
        <Paperclip size={22}/>
      </button>


      {/* Input */}
      <input
        type="text"
        placeholder="Ask anything about your documents..."
        className="
          flex-1
          bg-transparent
          outline-none
          text-white
          placeholder:text-zinc-500
        "
      />


      {/* Send */}
      <button className="
        w-9
        h-9
        rounded-full
        bg-white
        text-black
        flex
        items-center
        justify-center
        hover:bg-zinc-200
        transition
      ">
        <Send size={18}/>
      </button>


    </div>
  );
};

export default ChatInput;