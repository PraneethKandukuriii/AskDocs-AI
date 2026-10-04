const AuthCard = ({ children }) => {
  return (
    <div
      className="
        rounded-[1.75rem]
        border border-white/[0.12]
        bg-zinc-950/75
        p-7 sm:p-10
        shadow-[0_28px_100px_rgba(0,0,0,0.65)]
        backdrop-blur-2xl
      "
    >
      {children}
    </div>
  );
};

export default AuthCard;
