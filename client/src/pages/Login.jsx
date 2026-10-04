import AuthLayout from "../components/auth/AuthLayout";
import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout
      type="login"
      title="Welcome Back"
      subtitle="Sign in to continue to AskDocs AI."
      footerText="Don't have an account?"
      footerLabel="Create one"
      footerLink="/signup"
    >
      <LoginForm />
    </AuthLayout>
  );
};

export default Login;
