import ChatInput from "../components/ChatInput";

const Chat = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6">

      {/* Welcome */}
      <div className="text-center mb-10">

        <h1 className="
          text-4xl
          md:text-5xl
          font-semibold
          tracking-tight
        ">
          Hello Praneeth 👋
        </h1>


        <p className="
          mt-4
          text-lg
          text-zinc-400
        ">
          What can I help you understand today?
        </p>

      </div>


      {/* Input */}
      <ChatInput />


      {/* Suggestions */}
      <div className="
        mt-8
        grid
        grid-cols-1
        md:grid-cols-3
        gap-3
        max-w-3xl
        w-full
      ">

        <button className="
          border
          border-white/10
          rounded-xl
          p-4
          text-left
          text-sm
          text-zinc-300
          hover:bg-white/5
          transition
        ">
          📄 Summarize my document
        </button>


        <button className="
          border
          border-white/10
          rounded-xl
          p-4
          text-left
          text-sm
          text-zinc-300
          hover:bg-white/5
          transition
        ">
          🔍 Find key insights
        </button>


        <button className="
          border
          border-white/10
          rounded-xl
          p-4
          text-left
          text-sm
          text-zinc-300
          hover:bg-white/5
          transition
        ">
          💡 Explain this PDF
        </button>

      </div>


    </div>
  );
};

export default Chat;