import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "../components/auth/InputField";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { register as registerRequest } from "../services/authService";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async ({
    name,
    email,
    password,
    confirmPassword,
  }) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const response = await registerRequest({
        name,
        email,
        password,
      });

      const { token, user } = response.data;

      login(token, user);

      navigate("/app", { replace: true });
    } catch (err) {
      alert(
        err.response?.data?.message ||
          err.response?.data?.errors?.[0]?.msg ||
          "Unable to create your account. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      type="signup"
      title="Create your account"
      subtitle="Start your AI-powered document journey today."
      footerText="Already have an account?"
      footerLabel="Sign In"
      footerLink="/login"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <InputField
              name="name"
              type="text"
              placeholder="Full name"
              register={register}
              rules={{ required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } }}
              error={errors.name}
            />

            <InputField
              name="email"
              type="email"
              placeholder="Email address"
              register={register}
              rules={{ required: "Email is required" }}
              error={errors.email}
            />

            <InputField
              name="password"
              type="password"
              placeholder="Password"
              register={register}
              rules={{ required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } }}
              error={errors.password}
            />

            <InputField
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              register={register}
              rules={{ required: "Please confirm your password" }}
              error={errors.confirmPassword}
            />

            <AuthButton loading={loading}>
              Create Account
            </AuthButton>

      </form>
    </AuthLayout>
  );
};

export default Signup;
