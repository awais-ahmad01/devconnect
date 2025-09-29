import { DashboardHeaderProps } from "@/types";

export default function DashboardHeader({ userName, userRole, userInitials }: DashboardHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              DevConnect
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="font-semibold text-gray-900">{userName}</p>
              <p className="text-sm text-gray-600">{userRole}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              {userInitials}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}