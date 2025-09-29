'use client';

import Link from 'next/link';
import { Search, Users, Briefcase, Shield } from 'lucide-react';
import Button from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import FeatureCard from '@/components/shared/feature-card';

export default function DevConnectLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      <Header />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center space-y-8">
         
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Connect with Top<br />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Developers Worldwide
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Bridge the gap between visionary ideas and talented developers
            </p>
          </div>

        
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search developers, skills, or projects..."
                  className="w-full text-black pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-all"
                />
              </div>
              <Button 
                variant="primary"
                size="lg"
                className="px-8 bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Search size={20} />
                Search
              </Button>
            </div>
          </div>

       
          <div className="pt-4">
           <Link href="/role-selection">
             <Button 
              variant="primary"
              size="lg"
              className="group px-8 bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
            >
              Get Started
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
           </Link>
          </div>
        </div>
      </section>

     
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <FeatureCard
            icon={Users}
            title="Find Talent"
            description="Browse verified developers with proven skills"
          />

          {/* Feature 2 */}
          <FeatureCard
            icon={Briefcase}
            title="Post Projects"
            description="Share your ideas and receive competitive bids"
          />

          {/* Feature 3 */}
          <FeatureCard
            icon={Shield}
            title="Secure Platform"
            description="Protected payments and quality assurance"
            className="sm:col-span-2 lg:col-span-1"
          />
        </div>
      </section>

      <Footer/>
    </div>
  );
}