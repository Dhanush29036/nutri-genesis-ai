
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mealPlans } from "@/lib/mockData";
import { Utensils, Clock, Check, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const MealPlanCard = () => {
  const { breakfast, lunch, dinner } = mealPlans.today;
  
  // Calculate total calories for the day
  const totalCalories = breakfast.nutritionalValue.calories + 
                        lunch.nutritionalValue.calories + 
                        dinner.nutritionalValue.calories;
  
  // Calculate total nutrients
  const totalProtein = breakfast.nutritionalValue.protein + 
                       lunch.nutritionalValue.protein + 
                       dinner.nutritionalValue.protein;
  
  const totalCarbs = breakfast.nutritionalValue.carbs + 
                     lunch.nutritionalValue.carbs + 
                     dinner.nutritionalValue.carbs;
  
  const totalFat = breakfast.nutritionalValue.fat + 
                  lunch.nutritionalValue.fat + 
                  dinner.nutritionalValue.fat;
  
  const totalFiber = breakfast.nutritionalValue.fiber + 
                     lunch.nutritionalValue.fiber + 
                     dinner.nutritionalValue.fiber;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Today's Meal Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start space-x-5">
              <div className="bg-nutrition-light p-3 rounded-lg flex items-center justify-center">
                <Utensils className="h-6 w-6 text-nutrition-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-lg">Breakfast</h3>
                  <Badge className="bg-nutrition-lighter text-nutrition-secondary border-nutrition-light">
                    {breakfast.nutritionalValue.calories} kcal
                  </Badge>
                </div>
                <p className="text-gray-700 my-1">{breakfast.meal}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {breakfast.benefits.map((benefit, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs bg-nutrition-light text-nutrition-secondary"
                    >
                      {benefit}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-4 gap-2 mt-3">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Protein</p>
                    <p className="font-medium">{breakfast.nutritionalValue.protein}g</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Carbs</p>
                    <p className="font-medium">{breakfast.nutritionalValue.carbs}g</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Fat</p>
                    <p className="font-medium">{breakfast.nutritionalValue.fat}g</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Fiber</p>
                    <p className="font-medium">{breakfast.nutritionalValue.fiber}g</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-5">
              <div className="bg-nutrition-light p-3 rounded-lg flex items-center justify-center">
                <Utensils className="h-6 w-6 text-nutrition-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-lg">Lunch</h3>
                  <Badge className="bg-nutrition-lighter text-nutrition-secondary border-nutrition-light">
                    {lunch.nutritionalValue.calories} kcal
                  </Badge>
                </div>
                <p className="text-gray-700 my-1">{lunch.meal}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {lunch.benefits.map((benefit, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs bg-nutrition-light text-nutrition-secondary"
                    >
                      {benefit}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-4 gap-2 mt-3">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Protein</p>
                    <p className="font-medium">{lunch.nutritionalValue.protein}g</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Carbs</p>
                    <p className="font-medium">{lunch.nutritionalValue.carbs}g</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Fat</p>
                    <p className="font-medium">{lunch.nutritionalValue.fat}g</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Fiber</p>
                    <p className="font-medium">{lunch.nutritionalValue.fiber}g</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-5">
              <div className="bg-nutrition-light p-3 rounded-lg flex items-center justify-center">
                <Utensils className="h-6 w-6 text-nutrition-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-lg">Dinner</h3>
                  <Badge className="bg-nutrition-lighter text-nutrition-secondary border-nutrition-light">
                    {dinner.nutritionalValue.calories} kcal
                  </Badge>
                </div>
                <p className="text-gray-700 my-1">{dinner.meal}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {dinner.benefits.map((benefit, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs bg-nutrition-light text-nutrition-secondary"
                    >
                      {benefit}
                    </Badge>
                  ))}
                </div>
                
                <div className="grid grid-cols-4 gap-2 mt-3">
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Protein</p>
                    <p className="font-medium">{dinner.nutritionalValue.protein}g</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Carbs</p>
                    <p className="font-medium">{dinner.nutritionalValue.carbs}g</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Fat</p>
                    <p className="font-medium">{dinner.nutritionalValue.fat}g</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500">Fiber</p>
                    <p className="font-medium">{dinner.nutritionalValue.fiber}g</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="flex justify-between mb-2">
              <p className="text-sm font-medium">Daily Nutritional Summary</p>
              <p className="text-sm font-medium">{totalCalories} kcal</p>
            </div>
            
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <p className="text-xs text-gray-500">Protein ({totalProtein}g)</p>
                  <p className="text-xs text-gray-500">{Math.round((totalProtein / (totalProtein + totalCarbs + totalFat)) * 100)}%</p>
                </div>
                <Progress value={(totalProtein / (totalProtein + totalCarbs + totalFat)) * 100} className="h-1 bg-gray-100" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <p className="text-xs text-gray-500">Carbohydrates ({totalCarbs}g)</p>
                  <p className="text-xs text-gray-500">{Math.round((totalCarbs / (totalProtein + totalCarbs + totalFat)) * 100)}%</p>
                </div>
                <Progress value={(totalCarbs / (totalProtein + totalCarbs + totalFat)) * 100} className="h-1 bg-gray-100" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <p className="text-xs text-gray-500">Fats ({totalFat}g)</p>
                  <p className="text-xs text-gray-500">{Math.round((totalFat / (totalProtein + totalCarbs + totalFat)) * 100)}%</p>
                </div>
                <Progress value={(totalFat / (totalProtein + totalCarbs + totalFat)) * 100} className="h-1 bg-gray-100" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <p className="text-xs text-gray-500">Fiber ({totalFiber}g)</p>
                  <p className="text-xs text-gray-500">Daily Goal: 30g</p>
                </div>
                <Progress value={(totalFiber / 30) * 100} className="h-1 bg-gray-100" />
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-between">
            <Button variant="outline">Customize Meals</Button>
            <Button className="bg-nutrition-primary hover:bg-nutrition-secondary">Confirm Plan</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Weekly Plan Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mealPlans.weeklyPlan.map((day, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                    day.completed ? "bg-green-100" : "bg-gray-100"
                  )}>
                    {day.completed ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <Clock className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  <span className="font-medium">{day.day}</span>
                </div>
                <div className="flex items-center">
                  {day.completed ? (
                    <>
                      <span className="text-sm mr-2">Compliance: {day.complianceScore}%</span>
                      <Badge 
                        variant="outline" 
                        className={cn(
                          day.complianceScore > 80 
                            ? "bg-green-50 text-green-600 border-green-200" 
                            : day.complianceScore > 50 
                              ? "bg-amber-50 text-amber-600 border-amber-200"
                              : "bg-red-50 text-red-600 border-red-200"
                        )}
                      >
                        {day.complianceScore > 80 
                          ? "Good" 
                          : day.complianceScore > 50 
                            ? "Fair"
                            : "Poor"}
                      </Badge>
                    </>
                  ) : (
                    <Badge variant="outline" className="bg-gray-50 text-gray-500">
                      Upcoming
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MealPlanCard;
