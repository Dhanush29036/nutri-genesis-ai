import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ActivitySquare, ChefHat, Home, LineChart, LayoutDashboard, UserRound, Settings, Dna, HeartPulse } from "lucide-react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const location = useLocation();
  
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="h-5 w-5" /> },
    { name: "Microbiome", path: "/microbiome", icon: <Dna className="h-5 w-5" /> },
    { name: "Meal Planning", path: "/meal-planning", icon: <ChefHat className="h-5 w-5" /> },
    { name: "Wearable Data", path: "/wearables", icon: <HeartPulse className="h-5 w-5" /> },
    { name: "Progress", path: "/progress", icon: <LineChart className="h-5 w-5" /> },
    { name: "Profile", path: "/profile", icon: <UserRound className="h-5 w-5" /> },
  ];

  return (
    <aside className={cn("bg-sidebar h-screen w-64 flex-shrink-0 border-r border-gray-100", className)}>
      <div className="flex flex-col h-full">
        <div className="p-6">
          <Link to="/" className="flex items-center gap-2">
            <ActivitySquare className="h-6 w-6 text-nutrition-primary" />
            <span className="text-lg font-semibold text-nutrition-primary">NutriGenesis</span>
          </Link>
        </div>
        
        <nav className="flex-1 px-4 py-2">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-nutrition-primary text-white"
                      : "text-gray-700 hover:bg-nutrition-light hover:text-nutrition-secondary"
                  )}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 mt-auto">
          <Link
            to="/settings"
            className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-nutrition-light hover:text-nutrition-secondary transition-colors"
          >
            <Settings className="h-5 w-5" />
            Settings
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
