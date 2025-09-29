
'use client'


import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import Button from '../ui/button'
import Input from '../ui/input'
import { loginSchema, LoginFormData } from '../../lib/validations/schemas'
import { LoginFormProps } from '../../types'

export default function LoginForm({ userType }: LoginFormProps) {

   const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      userType,
      email: '',
      password: ''
    }
  })

  setValue('userType', userType)

  const onSubmit =  (data: LoginFormData) => {
    console.log('Form data:', data) 
    if(userType === 'developer'){
       router.push('/dashboard');
    }
  }


  const handleGoogleLogin = () => {
    
    console.log('Google login for:', userType)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label="Email Address"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        placeholder={`${userType}@example.com`}
        required
      />

      <Input
        label="Password"
        type="password"
        {...register('password')}
        error={errors.password?.message}
        placeholder="Enter your password"
        required
      />

      <div className="text-right">
        <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
          Forgot Password?
        </Link>
      </div>

      <Button 
        type="submit" 
        className="w-full px-8 bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-xl"
       
      >
        Log In
      </Button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">OR</span>
        </div>
      </div>

      <Button 
        variant="outline" 
        type="button"
        className="w-full flex items-center justify-center gap-2"
        onClick={handleGoogleLogin}
        
      >
        <span>G</span>
        Continue with Google
      </Button>

      <div className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link href={`/signup/${userType}`} className="text-blue-600 hover:underline">
          Sign up as {userType === 'developer' ? 'Developer' : 'User'}
        </Link>
      </div>
    </form>
  )
}