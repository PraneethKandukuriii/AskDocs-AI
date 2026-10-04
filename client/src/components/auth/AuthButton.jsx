const AuthButton = ({ children, loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
        flex h-14 w-full items-center justify-center rounded-2xl
        bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600
        px-5 text-sm font-semibold text-white
        shadow-[0_12px_30px_rgba(109,40,217,0.28)]
        transition duration-200
        hover:scale-[1.015] hover:from-violet-500 hover:to-indigo-500
        hover:shadow-[0_16px_38px_rgba(124,58,237,0.38)]
        active:scale-[0.99] disabled:pointer-events-none disabled:opacity-60
      "
    >
      {loading ? "Please wait..." : children}
    </button>
  );
};

export default AuthButton;
