'use client';

import { LayoutDashboard, User, FolderKanban,  LogOut } from 'lucide-react';
import { useState } from 'react';
import { SidebarItemProps } from '../../types';

function SidebarItem({ icon, label, active = false, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
        active 
          ? 'bg-indigo-600 text-white shadow-lg' 
          : 'text-white/80 hover:bg-white/10 hover:text-white'
      }`}
    >
      <span className={active ? 'scale-110' : ''}>{icon}</span>
      <span className="font-medium">{label}</span>
    </button>
  );
}


export default function DashboardSidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { icon: <User size={20} />, label: 'Profile' },
    { icon: <FolderKanban size={20} />, label: 'Projects' },
   
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-indigo-600 to-indigo-700 min-h-screen p-4 flex flex-col shadow-xl">
      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </nav>
      <div className="mt-auto pt-4 border-t border-white/10">
        <SidebarItem
          icon={<LogOut size={20} />}
          label="Logout"
          onClick={() => console.log('Logout clicked')}
        />
      </div>
    </aside>
  );
}
