import { LucideIcon } from 'lucide-react';
import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface Developer {
  id: string
  name: string
  title: string
  location: string
  experience: string
  rate: string
  projectsCompleted: string
  onTimeDelivery: string
  skills: string[]
  verified: boolean
  avatar?: string
}

export interface Project {
  id: string
  name: string
  client: string
  status: 'In Progress' | 'Review' | 'Completed'
  description?: string
}

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  userType: 'developer' | 'user'
  company?: string
}


export interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface LoginFormProps {
  userType: 'developer' | 'user'
}

export interface SignupFormProps {
  userType: 'developer' | 'user'
}


export interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export 
interface CardProps {
  children: React.ReactNode
  className?: string
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string | FieldError
}

export interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  onClick?: () => void;
}

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconBackground?: string;
  iconColor?: string;
  className?: string;
}

export interface DeveloperCardProps {
  name: string;
  title: string;
  location: string;
  experience: string;
  rate: string;
  projectsCompleted: number | string;
  onTimeDelivery: string;
  skills: string[];
  verified?: boolean;
  rating?: number;
  avatarColor: string;
  initials: string;
}


export interface StatCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  iconBg: string;
}


export interface ProjectItemProps {
  name: string;
  client: string;
  status: string;
  statusColor: string;
}

export interface BidItemProps {
  name: string;
  time: string;
  status: string;
  statusColor: string;
}

export interface DashboardHeaderProps {
  userName: string;
  userRole: string;
  userInitials: string;
};

