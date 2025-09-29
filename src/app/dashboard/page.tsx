import DashboardHeader from '@/components/dashboard-layout/header';
import DashboardSidebar from '@/components/dashboard-layout/sidebar';
import DashboardMain from '@/components/dashboard-layout/main';

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <DashboardHeader 
          userName="Awais Ajmad" 
          userRole="Software Developer" 
          userInitials="AA" 
        />
        <DashboardMain />
      </div>
    </div>
  );
}