import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";
import AuthButton from "./AuthButton";
import { login as loginRequest } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await loginRequest(data);
      const { token, user } = response.data;
      login(token, user);
      navigate("/app", { replace: true });
    } catch (err) {
      alert(err.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
        rules={{ required: "Password is required" }}
        error={errors.password}
      />

      <AuthButton loading={loading}>Sign In</AuthButton>

    </form>
  );
};

export default LoginForm;
