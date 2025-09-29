
'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import Button from '../ui/button'
import Input from '../ui/input'
import { forgotPasswordSchema, ForgotPasswordFormData } from '../../lib/validations/schemas'

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      email: ''
    }
  })

  const onSubmit =  (data: ForgotPasswordFormData) => {
   console.log('Forgot password data:', data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Email Address"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        placeholder="your@example.com"
        required
      />

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> We'll send you an email with instructions to reset your password. 
          Please check your inbox and spam folder.
        </p>
      </div>

      <Button 
        type="submit" 
        className="w-full px-8 bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-xl"
    
      >
        Send Reset Link
      </Button>

      <div className="text-center text-sm text-gray-600">
        Remember your password?{' '}
        <Link href="/auth/role-selection" className="text-blue-600 hover:underline">
          Back to Login
        </Link>
      </div>
    </form>
  )
}