
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import HealthMetricsCard from "@/components/dashboard/HealthMetricsCard";
import MicrobiomeCard from "@/components/dashboard/MicrobiomeCard";
import NutritionRecommendations from "@/components/dashboard/NutritionRecommendations";
import WeeklyProgress from "@/components/dashboard/WeeklyProgress";
import WearableSync from "@/components/wearables/WearableSync";
import { userData } from "@/lib/mockData";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="dashboard-title">Welcome back, {userData.name}</h1>
        <p className="dashboard-subtitle">Here's your personalized nutrition dashboard</p>
      </div>
      
      <div className="dashboard-grid">
        <HealthMetricsCard />
        <MicrobiomeCard />
        <NutritionRecommendations />
      </div>
      
      <div className="mt-8">
        <WeeklyProgress />
      </div>
      
      <div className="mt-8">
        <h2 className="dashboard-title">Wearable Data</h2>
        <p className="dashboard-subtitle">Real-time health metrics from your connected devices</p>
        
        <WearableSync />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
