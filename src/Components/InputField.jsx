import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function InputField({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  showPasswordToggle = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = showPasswordToggle
    ? showPassword
      ? "text"
      : "password"
    : type;

  return (
    <div className="mb-4">
      <label className="block text-[#0F172A] mb-2 font-['Poppins']">
        {label}
      </label>
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 border rounded-xl font-['Poppins'] transition-all focus:outline-none focus:ring-2 focus:ring-[#F59E0B] ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm mt-1 font-['Poppins']">{error}</p>
      )}
    </div>
  );
}
