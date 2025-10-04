
'use client';
import { useState } from "react";
import { Search} from 'lucide-react';
import DeveloperCard from "@/components/shared/developer-card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Button from "@/components/ui/button"; 


export default function DevelopersPage() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const filterSkills = ['React', 'Node.js', 'Python', 'UI/UX', 'Mobile', 'DevOps', 'AWS', 'Docker'];

  const developers = [
    {
      name: "Awais Ahmad",
      title: "Full Stack Developer",
      location: "Islamabad, Pakistan",
      experience: "5 years",
      rate: "$50-80/hour",
      projectsCompleted: "42",
      onTimeDelivery: "95%",
      skills: ["React", "Node.js", "MongoDB", "AWS"],
      verified: true,
      rating: 4.9,
      avatarColor: "bg-gradient-to-br from-blue-600 to-indigo-600",
      initials: "AA"
    },
    {
      name: "Sarah Miller",
      title: "UI/UX Designer",
      location: "San Francisco, USA",
      experience: "7 years",
      rate: "$60-90/hour",
      projectsCompleted: "68",
      onTimeDelivery: "98%",
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
      verified: true,
      rating: 5.0,
      avatarColor: "bg-gradient-to-br from-emerald-500 to-green-600",
      initials: "SM"
    },
    {
      name: "Alex Kumar",
      title: "Mobile App Developer",
      location: "London, UK",
      experience: "4 years",
      rate: "$45-70/hour",
      projectsCompleted: "35",
      onTimeDelivery: "92%",
      skills: ["React Native", "Flutter", "iOS", "Android"],
      verified: true,
      rating: 4.8,
      avatarColor: "bg-gradient-to-br from-amber-500 to-orange-600",
      initials: "AK"
    },
    {
      name: "Maria Rodriguez",
      title: "Backend Developer",
      location: "Barcelona, Spain",
      experience: "6 years",
      rate: "$55-85/hour",
      projectsCompleted: "51",
      onTimeDelivery: "96%",
      skills: ["Python", "Django", "PostgreSQL", "Docker"],
      verified: true,
      rating: 4.9,
      avatarColor: "bg-gradient-to-br from-red-500 to-rose-600",
      initials: "MR"
    },
    {
      name: "Tom Chen",
      title: "DevOps Engineer",
      location: "Singapore",
      experience: "8 years",
      rate: "$70-100/hour",
      projectsCompleted: "29",
      onTimeDelivery: "94%",
      skills: ["Kubernetes", "AWS", "CI/CD", "Terraform"],
      verified: true,
      rating: 4.7,
      avatarColor: "bg-gradient-to-br from-purple-600 to-indigo-700",
      initials: "TC"
    },
    {
      name: "Lisa Park",
      title: "Data Scientist",
      location: "Seoul, South Korea",
      experience: "5 years",
      rate: "$65-95/hour",
      projectsCompleted: "38",
      onTimeDelivery: "99%",
      skills: ["Python", "TensorFlow", "Pandas", "Machine Learning"],
      verified: true,
      rating: 5.0,
      avatarColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
      initials: "LP"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      
      <Header />

     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
     
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Developer Profile Cards
          </h1>
          <p className="text-lg text-gray-600">
            Showcasing developers information
          </p>
        </div>

      
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search developers by skills or location..."
                className="w-full text-black pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm transition-all"
              />
            </div>
            <Button 
              variant="primary"
              size="lg"
              className="px-6 bg-gradient-to-r from-indigo-600 to-blue-600 hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Search size={20} />
              <span className="hidden sm:inline">Search</span>
            </Button>
          </div>

        
          <div className="flex flex-wrap gap-3">
            {filterSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => {
                  setSelectedSkills(prev => 
                    prev.includes(skill) 
                      ? prev.filter(s => s !== skill)
                      : [...prev, skill]
                  );
                }}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  selectedSkills.includes(skill)
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                }`}
              >
                {skill}
              </button>
            ))}
          </div>
        </div>

       
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((dev, index) => (
            <DeveloperCard key={index} {...dev} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}