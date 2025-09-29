import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
         
          <div className="space-y-4">
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
            <p className="text-gray-600 leading-relaxed">
              Connecting developers and visionaries worldwide to build amazing projects together.
            </p>
       
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-gray-600 hover:text-indigo-600 hover:shadow-md transition-all duration-200 hover:-translate-y-1">
                <Mail size={20} />
              </a>
            </div>
          </div>

        
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  Support
                </a>
              </li>
            </ul>
          </div>

        
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © 2024 DevConnect. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors font-medium">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}