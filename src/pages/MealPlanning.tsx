
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import MealPlanCard from "@/components/meal-planning/MealPlanCard";

const MealPlanning = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="dashboard-title">Personalized Meal Planning</h1>
        <p className="dashboard-subtitle">AI-generated meal plans based on your gut microbiome and health data</p>
      </div>
      
      <MealPlanCard />
    </DashboardLayout>
  );
};

export default MealPlanning;
