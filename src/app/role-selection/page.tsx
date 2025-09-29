'use client';

import { useRouter } from 'next/navigation';
import { Monitor, Rocket } from 'lucide-react';
import RoleCard from '../../components/shared/role-card';

export default function RoleSelection() {
  const router = useRouter();

  const handleDeveloperClick = () => {
    console.log('Developer role selected');
  
    router.push('/signup/developer');
  };

  const handleUserClick = () => {
    console.log('User role selected');
   
    router.push('/signup/user');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full py-8">
       
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              DevConnect
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Path
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Select how you'd like to join DevConnect
          </p>
        </div>

      
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
         
          <RoleCard
            title="I'm a Developer"
            description="Showcase your skills, find projects, and grow your career"
            icon={<Monitor className="w-12 h-12 md:w-14 md:h-14 text-white" strokeWidth={2} />}
            gradient="bg-gradient-to-br from-indigo-600 via-indigo-500 to-blue-500"
            onClick={handleDeveloperClick}
          />

          
          <RoleCard
            title="I'm a User"
            description="Post projects, find talent, and bring your ideas to life"
            icon={<Rocket className="w-12 h-12 md:w-14 md:h-14 text-white" strokeWidth={2} />}
            gradient="bg-gradient-to-br from-pink-500 via-pink-400 to-rose-400"
            onClick={handleUserClick}
          />
        </div>
      </div>
    </div>
  );
}