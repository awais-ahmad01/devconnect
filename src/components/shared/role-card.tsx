import React from "react";

import { RoleCardProps } from "@/types";

export default function RoleCard({
  title,
  description,
  icon,
  gradient,
  onClick,
}: RoleCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-3xl p-8 md:p-10 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl ${gradient} min-h-[400px] flex flex-col justify-between`}
    >
      <div className="flex justify-center mb-6">
        <div className="w-24 h-24 md:w-28 md:h-28 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-white/30 rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>

      <div className="text-center text-white space-y-4 flex-grow flex flex-col justify-center">
        <h3 className="text-2xl md:text-3xl font-bold leading-tight">
          {title}
        </h3>
        <p className="text-white/90 text-sm md:text-base leading-relaxed max-w-xs mx-auto">
          {description}
        </p>
      </div>

      <div className="flex justify-center mt-6">
        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <svg
            className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>
    </div>
  );
}
