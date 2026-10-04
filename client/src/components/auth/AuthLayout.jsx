import { Link } from "react-router-dom";
import AuthCard from "./AuthCard";

const AuthLayout = ({
  type = "login",
  title,
  subtitle,
  children,
  footerText,
  footerLabel,
  footerLink,
}) => {
  const isSignup = type === "signup";

  return (
    <div className={`relative flex min-h-screen overflow-hidden bg-black text-white ${isSignup ? "" : "items-center justify-center"}`}>
      {isSignup ? (
        <>
          <section className="relative hidden min-h-screen flex-1 items-center overflow-hidden lg:flex">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-violet-600/20 blur-[105px]" />
            <div className="absolute bottom-16 right-12 h-44 w-44 rounded-full bg-cyan-400/10 blur-[90px]" />
            <div className="absolute left-[36%] top-[63%] h-16 w-16 rounded-full bg-pink-500/15 blur-[55px]" />

            <div className="relative z-10 px-12 xl:px-20">
              <h1 className="max-w-2xl text-7xl font-semibold tracking-tight leading-[0.95] text-white xl:text-8xl">
                Transform
                <br />
                Documents Into
                <br />
                Conversations.
              </h1>
              <p className="mt-8 max-w-md text-base leading-7 text-white xl:text-lg xl:leading-8">
                Turn PDFs, research papers, reports, and notes into intelligent AI conversations. Ask questions naturally and get accurate, context-aware answers in seconds.
              </p>
            </div>
          </section>
          <section className="relative flex min-h-screen flex-1 items-center justify-center px-5 py-10 sm:px-8">
            <div className="absolute -right-20 top-20 h-52 w-52 rounded-full bg-violet-500/10 blur-[100px]" />
            <AuthPanel {...{ title, subtitle, children, footerText, footerLabel, footerLink }} />
          </section>
        </>
      ) : (
        <>
          <div className="absolute -right-24 top-16 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
          <AuthPanel {...{ title, subtitle, children, footerText, footerLabel, footerLink }} />
        </>
      )}
    </div>
  );
};

const AuthPanel = ({ title, subtitle, children, footerText, footerLabel, footerLink }) => (
  <div className="relative z-10 w-full max-w-md px-5 sm:px-0">
    <AuthCard>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-zinc-400">{subtitle}</p>
      </div>
      {children}
    </AuthCard>

    <p className="mt-7 text-center text-sm text-zinc-500">
      {footerText}{" "}
      <Link to={footerLink} className="font-medium text-violet-400 transition-colors hover:text-violet-300">
        {footerLabel}
      </Link>
    </p>
  </div>
);

export default AuthLayout;
