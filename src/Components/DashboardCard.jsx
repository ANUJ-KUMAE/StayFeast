export function DashboardCard({ title, children, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-[#F59E0B]">{icon}</div>}
        <h3 className="font-['Poppins'] text-[#0F172A]">{title}</h3>
      </div>
      <div className="font-['Poppins']">{children}</div>
    </div>
  );
}