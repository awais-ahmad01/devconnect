// components/shared/feature-card.tsx
import { LucideIcon } from 'lucide-react';

import {FeatureCardProps} from '../../types';

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconBackground = "bg-gradient-to-br from-indigo-100 to-blue-100",
  iconColor = "text-indigo-600",
  className = ""
}: FeatureCardProps) {
  return (
    <div className={`group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <div className={`w-16 h-16 ${iconBackground} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}