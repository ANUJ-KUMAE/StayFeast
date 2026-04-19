import { LogOut } from "lucide-react";
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";
import { Modal } from "./Modal";

export function Navbar() {
  const { user, logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    logout();
    setShowLogoutModal(false);
  };

  return (
    <>
      <nav className="bg-white shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="font-['Playfair_Display'] text-2xl text-[#0F172A]">
            StayFeast
          </h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center text-white font-['Poppins']">
                {user?.name.charAt(0).toUpperCase()}
              </div>
              <span className="font-['Poppins'] text-[#0F172A]">{user?.name}</span>
            </div>

            <button
              onClick={() => setShowLogoutModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all font-['Poppins']"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <Modal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        title="Confirm Logout"
      >
        <p className="text-gray-600 mb-6 font-['Poppins']">
          Are you sure you want to logout?
        </p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={() => setShowLogoutModal(false)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl transition-all font-['Poppins']"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-[#F59E0B] hover:bg-[#D97706] text-white rounded-xl transition-all font-['Poppins']"
          >
            Logout
          </button>
        </div>
      </Modal>
    </>
  );
}
