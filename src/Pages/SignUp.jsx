import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { AuthCard } from "../Components/AuthCard";
import { InputField } from "../Components/InputField";
import { Button } from "../Components/Button";

export function SignUp() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const getPasswordStrength = (pwd) => {
    if (pwd.length === 0) return { strength: 0, label: '', color: '' };
    if (pwd.length < 6) return { strength: 33, label: 'Weak', color: 'bg-red-500' };
    if (pwd.length < 10) return { strength: 66, label: 'Medium', color: 'bg-yellow-500' };
    return { strength: 100, label: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength(password);

  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await signup(name, email, password);
      setSuccess(true);
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      setErrors({ submit: 'Signup failed. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <AuthCard>
        <div className="text-center py-8">
          <CheckCircle2 size={64} className="text-green-500 mx-auto mb-4" />
          <h2 className="font-['Playfair_Display'] text-2xl text-[#0F172A] mb-2">
            Account Created!
          </h2>
          <p className="text-gray-600 font-['Poppins']">
            Redirecting to dashboard...
          </p>
        </div>
      </AuthCard>
    );
  }

  return (
    <AuthCard>
      <h2 className="font-['Playfair_Display'] text-2xl text-[#0F172A] mb-6 text-center">
        Create Account
      </h2>

      {errors.submit && (
        <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-xl mb-4 font-['Poppins'] text-sm">
          {errors.submit}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          type="text"
          value={name}
          onChange={setName}
          placeholder="Enter your full name"
          error={errors.name}
        />

        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Enter your email"
          error={errors.email}
        />

        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Create a password"
          showPasswordToggle
          error={errors.password}
        />

        {password && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-['Poppins'] text-gray-600">Password Strength</span>
              <span className={`text-xs font-['Poppins'] ${
                passwordStrength.strength === 100 ? 'text-green-600' :
                passwordStrength.strength === 66 ? 'text-yellow-600' : 'text-red-600'
              }`}>
                {passwordStrength.label}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`${passwordStrength.color} h-2 rounded-full transition-all duration-300`}
                style={{ width: `${passwordStrength.strength}%` }}
              />
            </div>
          </div>
        )}

        <InputField
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={setConfirmPassword}
          placeholder="Confirm your password"
          showPasswordToggle
          error={errors.confirmPassword}
        />

        <Button type="submit" variant="primary" loading={loading} fullWidth>
          Sign Up
        </Button>
      </form>

      <p className="text-center mt-6 text-sm text-gray-600 font-['Poppins']">
        Already have an account?{' '}
        <Link to="/login" className="text-[#F59E0B] hover:text-[#D97706]">
          Login
        </Link>
      </p>
    </AuthCard>
  );
}