import { Loader2 } from "lucide-react";

export function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  loading = false,
  disabled = false,
  fullWidth = false,
}) {
  const baseStyles =
    "px-6 py-3 rounded-xl font-['Poppins'] transition-all duration-200 flex items-center justify-center gap-2";

  const variantStyles = {
    primary:
      "bg-[#F59E0B] text-white hover:bg-[#D97706] shadow-md hover:shadow-lg",
    secondary: "bg-gray-200 text-[#0F172A] hover:bg-gray-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${
        fullWidth ? "w-full" : ""
      } ${disabled || loading ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {loading && <Loader2 className="animate-spin" size={20} />}
      {children}
    </button>
  );
}
