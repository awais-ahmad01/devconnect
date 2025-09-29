import Link from 'next/link'
import ForgotPasswordForm from '../../../components/forms/forgot-password-form'

export default function ForgotPassword() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8">
       
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">DevConnect</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Reset Your Password
          </h1>
          <p className="text-gray-600">
            Enter your email and we'll send you a reset link.
          </p>
        </div>

        <ForgotPasswordForm />
      </div>
    </div>
  )
}