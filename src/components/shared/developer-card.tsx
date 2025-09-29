
import React from 'react';
import { MapPin, Briefcase, DollarSign, CheckCircle2, Clock, Star } from 'lucide-react';
import Button from '../ui/button';


import { DeveloperCardProps } from '../../types';

export default function DeveloperCard({
  name,
  title,
  location,
  experience,
  rate,
  projectsCompleted,
  onTimeDelivery,
  skills,
  verified = false,
  rating = 4.9,
  avatarColor,
  initials
}: DeveloperCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-5">
        <div className={`w-16 h-16 ${avatarColor} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md`}>
          <span className="text-white text-xl font-bold">{initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-900 text-lg truncate">{name}</h3>
            {verified && (
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <div className="flex items-center gap-1 ml-auto flex-shrink-0">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-sm font-semibold text-gray-900">{rating}</span>
            </div>
          </div>
          <p className="text-gray-700 font-medium text-sm mb-1">{title}</p>
          <div className="flex items-center gap-1 text-gray-500 text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <Briefcase className="w-4 h-4 text-amber-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-600">{experience} experience</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <DollarSign className="w-4 h-4 text-green-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-600">{rate}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-600">{projectsCompleted} projects completed</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
            <Clock className="w-4 h-4 text-purple-600" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-600">{onTimeDelivery} on-time delivery</p>
          </div>
        </div>
      </div>

      <div className="mb-5">
        <h4 className="text-xs font-semibold text-gray-700 mb-2">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-medium">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="md"
          className="flex-1 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all"
        >
          View Profile
        </Button>
        <Button 
          variant="primary"
          size="md"
          className="flex-1 bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-lg hover:scale-105 transition-all"
        >
          Send Message
        </Button>
      </div>
    </div>
  );
}