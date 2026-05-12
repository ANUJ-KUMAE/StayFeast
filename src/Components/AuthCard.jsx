export function AuthCard({ children }) {
    return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h1 className="font-['Playfair_Display'] text-4xl text-[#0F172A] mb-2">
            StayFeast
          </h1>
        </div>
        {children}
      </div>
    </div>
  );
}