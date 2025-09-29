
import * as yup from 'yup';


export const signupSchema = yup.object({
  firstName: yup.string().required('First name is required').min(2, 'First name must be at least 2 characters'),
  lastName: yup.string().required('Last name is required').min(2, 'Last name must be at least 2 characters'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  confirmPassword: yup.string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  techStack: yup.string().optional(),
  githubUrl: yup.string().url('Please enter a valid URL').optional(),
  linkedinUrl: yup.string().url('Please enter a valid URL').optional(),
 
  userType: yup.string().oneOf(['developer', 'user']).required()
});

export const loginSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().required('Password is required'),
  userType: yup.string().oneOf(['developer', 'user']).required()
});

export const forgotPasswordSchema = yup.object({
  email: yup.string().email('Invalid email address').required('Email is required')
});

export type ForgotPasswordFormData = yup.InferType<typeof forgotPasswordSchema>;

export type SignupFormData = yup.InferType<typeof signupSchema>;
export type LoginFormData = yup.InferType<typeof loginSchema>;