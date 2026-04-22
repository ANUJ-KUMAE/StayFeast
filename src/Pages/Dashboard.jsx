import { Calendar, Clock, User } from "lucide-react";
import { DashboardCard } from "../Components/DashboardCard";
import { Navbar } from "../Components/Navbar";
import { useAuth } from "../Context/AuthContext";

export function Dashboard() {
  const { user } = useAuth();

  const recentActivities = [
    { id: 1, title: 'Booked Ocean View Suite', date: '2 hours ago' },
    { id: 2, title: 'Updated Profile Information', date: '1 day ago' },
    { id: 3, title: 'Reviewed Mountain Resort', date: '3 days ago' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <h1 className="font-['Playfair_Display'] text-3xl text-[#0F172A] mb-8">
          Welcome, {user?.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <DashboardCard title="Total Bookings" icon={<Calendar size={24} />}>
            <p className="text-4xl text-[#0F172A] mb-2">12</p>
            <p className="text-sm text-gray-500">Active reservations</p>
          </DashboardCard>

          <DashboardCard title="Profile Info" icon={<User size={24} />}>
            <p className="text-gray-700 mb-1">{user?.name}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
            <button className="mt-3 text-[#F59E0B] hover:text-[#D97706] text-sm">
              Edit Profile →
            </button>
          </DashboardCard>

          <DashboardCard title="Member Since" icon={<Clock size={24} />}>
            <p className="text-2xl text-[#0F172A] mb-2">April 2026</p>
            <p className="text-sm text-gray-500">Premium member</p>
          </DashboardCard>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="font-['Playfair_Display'] text-xl text-[#0F172A] mb-4">
            Recent Activity
          </h2>

          {recentActivities.length > 0 ? (
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
                >
                  <div>
                    <p className="font-['Poppins'] text-[#0F172A]">{activity.title}</p>
                    <p className="text-sm text-gray-500 font-['Poppins']">{activity.date}</p>
                  </div>
                  <button className="text-[#F59E0B] hover:text-[#D97706] text-sm font-['Poppins']">
                    View
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Calendar size={48} className="text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500 font-['Poppins']">No recent activity</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );   
}