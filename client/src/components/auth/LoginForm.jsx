import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, ArrowRight, Loader2 } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import PasswordInput from "./PasswordInput";
import SocialLogin from "./SocialLogin";
import { login } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const res = await login(data);

     login(res.token, res.user);

navigate("/dashboard");
    } catch (err) {
      alert(
        err.response?.data?.message || "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      {/* Email */}

      <div className="space-y-2">
        <label className="text-sm text-zinc-300">Email</label>

        <div className="group flex items-center rounded-2xl border border-white/10 bg-white/5 focus-within:border-violet-500">

          <Mail
            className="ml-4 text-zinc-500 group-focus-within:text-violet-400"
            size={20}
          />

          <input
            type="email"
            placeholder="you@example.com"
            {...register("email", {
              required: "Email is required",
            })}
            className="w-full bg-transparent px-4 py-4 text-white outline-none"
          />
        </div>

        {errors.email && (
          <p className="text-red-400 text-sm">
            {errors.email.message}
          </p>
        )}
      </div>

      <PasswordInput
        register={register}
        error={errors.password}
      />

      <button
        disabled={loading}
        className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-500 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={18} />
            Signing In...
          </>
        ) : (
          <>
            Continue
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </>
        )}
      </button>

      <SocialLogin />

      <p className="text-center text-sm text-zinc-400">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-semibold text-violet-400 hover:text-violet-300"
        >
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;