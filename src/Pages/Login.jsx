import { Link, useNavigate } from "react-router-dom";
import { AuthCard } from "../Components/AuthCard";
import { Button } from "../Components/Button";
import { InputField } from "../Components/InputField";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard>
      <h2 className="font-['Playfair_Display'] text-2xl text-[#0F172A] mb-6 text-center">
        Welcome
      </h2>

      {error && (
        <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-xl mb-4 font-['Poppins'] text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email"
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Enter your password"
          showPasswordToggle
        />

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 accent-[#F59E0B]"
            />
            <span className="text-sm text-gray-600 font-['Poppins']">
              Remember Me
            </span>
          </label>

          <a
            href="#"
            className="text-sm text-[#F59E0B] hover:text-[#D97706] font-['Poppins']"
          >
            Forgot Password?
          </a>
        </div>

        <Button type="submit" variant="primary" loading={loading} fullWidth>
          Login
        </Button>
      </form>

      <p className="text-center mt-6 text-sm text-gray-600 font-['Poppins']">
        Don't have an account?{" "}
        <Link to="/signup" className="text-[#F59E0B] hover:text-[#D97706]">
          Sign up
        </Link>
      </p>
    </AuthCard>
  );
}
