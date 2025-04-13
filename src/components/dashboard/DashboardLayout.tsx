
import { ReactNode } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { userData } from "@/lib/mockData";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header userName={userData.name} userImage={userData.profileImage} />
      <div className="flex">
        {!isMobile && <Sidebar />}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
