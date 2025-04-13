
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mealPlans } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";

const NutritionRecommendations = () => {
  const { breakfast, lunch, dinner, snacks } = mealPlans.today;

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Today's Nutrition Plan</CardTitle>
        <CardDescription>Personalized recommendations based on your data</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-5">
          <div>
            <h4 className="flex items-center gap-2 text-sm font-medium">
              Breakfast
              <Badge variant="outline" className="bg-nutrition-lighter border-nutrition-light">
                {breakfast.nutritionalValue.calories} kcal
              </Badge>
            </h4>
            <p className="text-sm mt-1">{breakfast.meal}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {breakfast.benefits.map((benefit, index) => (
                <Badge key={index} variant="secondary" className="text-xs bg-nutrition-light text-nutrition-secondary">
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="flex items-center gap-2 text-sm font-medium">
              Lunch
              <Badge variant="outline" className="bg-nutrition-lighter border-nutrition-light">
                {lunch.nutritionalValue.calories} kcal
              </Badge>
            </h4>
            <p className="text-sm mt-1">{lunch.meal}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {lunch.benefits.map((benefit, index) => (
                <Badge key={index} variant="secondary" className="text-xs bg-nutrition-light text-nutrition-secondary">
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="flex items-center gap-2 text-sm font-medium">
              Dinner
              <Badge variant="outline" className="bg-nutrition-lighter border-nutrition-light">
                {dinner.nutritionalValue.calories} kcal
              </Badge>
            </h4>
            <p className="text-sm mt-1">{dinner.meal}</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {dinner.benefits.map((benefit, index) => (
                <Badge key={index} variant="secondary" className="text-xs bg-nutrition-light text-nutrition-secondary">
                  {benefit}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium">Snacks</h4>
            <div className="space-y-2 mt-1">
              {snacks.map((snack, index) => (
                <div key={index} className="text-sm">
                  <p>{snack.name}</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {snack.benefits.map((benefit, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="text-xs bg-nutrition-light text-nutrition-secondary"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <a href="/meal-planning" className="text-sm text-nutrition-primary hover:underline">
            View full meal plan →
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default NutritionRecommendations;
