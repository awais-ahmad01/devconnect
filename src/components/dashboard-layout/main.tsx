import { Briefcase, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import {StatCardProps} from "../../types";
import {ProjectItemProps} from "../../types";
import {BidItemProps} from "../../types";

function StatCard({ icon, value, label, iconBg }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );
}



function ProjectItem({ name, client, status, statusColor }: ProjectItemProps) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">Client: {client}</p>
      <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium ${statusColor}`}>
        {status}
      </span>
    </div>
  );
}



function BidItem({ name, time, status, statusColor }: BidItemProps) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <h3 className="font-semibold text-gray-900 mb-2">{name}</h3>
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">Posted {time}</p>
        <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium ${statusColor}`}>
          {status}
        </span>
      </div>
    </div>
  );
}

export default function DashboardMain() {
  const projects = [
    { 
      name: 'E-commerce Platform Redesign', 
      client: 'TechMart Inc.', 
      status: 'In Progress',
      statusColor: 'bg-green-100 text-green-700'
    },
    { 
      name: 'Mobile App Development', 
      client: 'StartupXYZ', 
      status: 'In Progress',
      statusColor: 'bg-green-100 text-green-700'
    },
    { 
      name: 'API Integration Project', 
      client: 'DataFlow Corp', 
      status: 'Review',
      statusColor: 'bg-yellow-100 text-yellow-700'
    }
  ];

  const bids = [
    { 
      name: 'React Dashboard Development', 
      time: '2 hours ago', 
      status: 'Pending',
      statusColor: 'bg-yellow-100 text-yellow-700'
    },
    { 
      name: 'WordPress Plugin Custom', 
      time: '1 day ago', 
      status: 'Accepted',
      statusColor: 'bg-blue-100 text-blue-700'
    }
  ];

  return (
    <main className="flex-1 bg-gray-50 p-6 lg:p-8 overflow-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, John!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={<Briefcase className="w-7 h-7 text-indigo-600" />}
          value="12"
          label="Active Projects"
          iconBg="bg-indigo-100"
        />
        <StatCard
          icon={<CheckCircle2 className="w-7 h-7 text-green-600" />}
          value="47"
          label="Completed"
          iconBg="bg-green-100"
        />
        <StatCard
          icon={<FileText className="w-7 h-7 text-purple-600" />}
          value="8"
          label="Recent Bids"
          iconBg="bg-purple-100"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Active Projects</h2>
            <button className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors">
              View All
              <ChevronRight size={16} />
            </button>
          </div>
          <div>
            {projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Bids</h2>
            <button className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium text-sm transition-colors">
              View All
              <ChevronRight size={16} />
            </button>
          </div>
          <div>
            {bids.map((bid, index) => (
              <BidItem key={index} {...bid} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}