"use client";

import LoginForm from "../../../../components/forms/login-form";

export default function DeveloperLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-14">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              DevConnect
            </span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Developer Login
          </h1>
          <p className="text-gray-600">
            Welcome back! Log in to access your projects
          </p>
        </div>

        <LoginForm userType="developer" />
      </div>
    </div>
  );
}
