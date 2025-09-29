
'use client'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Link from 'next/link'
import Button from '../ui/button'
import Input from '../ui/input'
import { signupSchema } from '../../lib/validations/schemas'
import { SignupFormProps } from '../../types'


type FormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  userType: 'developer' | 'user'
  techStack?: string
  githubUrl?: string
  linkedinUrl?: string
  
}

export default function SignupForm({ userType }: SignupFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm<FormData>({
    resolver: yupResolver(signupSchema as any), 
    defaultValues: {
      userType,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      techStack: '',
      githubUrl: '',
      linkedinUrl: '',
      
    }
  })

  
  setValue('userType', userType)

  const onSubmit =  (data: FormData) => {
      console.log('Form data:', data)
      alert('Signup successful!')
  }

  const handleGoogleSignup = () => {
    
    console.log('Google signup for:', userType)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="First Name"
          {...register('firstName')}
          error={errors.firstName?.message}
          placeholder="John"
          required
        />
        <Input
          label="Last Name"
          {...register('lastName')}
          error={errors.lastName?.message}
          placeholder="Doe"
          required
        />
      </div>

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
        placeholder="Create a strong password"
        required
      />

      <Input
        label="Confirm Password"
        type="password"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
        placeholder="Re-enter your password"
        required
      />

      {userType === 'developer' && (
        <>
          <Input
            label="Tech Stack (Optional)"
            {...register('techStack')}
            error={errors.techStack?.message}
            placeholder="e.g., React, Node.js, Python, AWS"
          />

          <Input
            label="GitHub URL (Optional)"
            {...register('githubUrl')}
            error={errors.githubUrl?.message}
            placeholder="https://github.com/yourusername"
          />

          <Input
            label="LinkedIn URL (Optional)"
            {...register('linkedinUrl')}
            error={errors.linkedinUrl?.message}
            placeholder="https://linkedin.com/in/yourusername"
          />
        </>
      )}

    

      <Button 
        type="submit" 
        className="w-full px-8 bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-xl"
       
      >
        Create Account
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
        onClick={handleGoogleSignup}
        
      >
        <span>G</span>
        Sign up with Google
      </Button>

      <div className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link href={`/login/${userType}`} className="text-blue-600 hover:underline">
          Log in
        </Link>
      </div>
    </form>
  )
}