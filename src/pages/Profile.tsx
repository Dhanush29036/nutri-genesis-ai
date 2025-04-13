
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { userData } from "@/lib/mockData";
import { ChevronRight, Edit, Save } from "lucide-react";

const Profile = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="dashboard-title">User Profile</h1>
        <p className="dashboard-subtitle">Manage your account and preferences</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={userData.profileImage}
                  alt={userData.name}
                  className="h-24 w-24 rounded-full object-cover"
                />
                <Button variant="ghost" size="icon" className="absolute bottom-0 right-0 bg-white rounded-full h-8 w-8 shadow-sm border border-gray-200">
                  <Edit className="h-4 w-4" />
                  <span className="sr-only">Edit profile image</span>
                </Button>
              </div>
              <h2 className="mt-4 text-xl font-semibold">{userData.name}</h2>
              <p className="text-sm text-gray-500">Member since {userData.memberSince}</p>
              
              <div className="mt-6 w-full">
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Email</span>
                    <span className="text-sm font-medium">{userData.email}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Age</span>
                    <span className="text-sm font-medium">{userData.age} years</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Weight</span>
                    <span className="text-sm font-medium">{userData.weight} kg</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-100">
                    <span className="text-sm text-gray-500">Height</span>
                    <span className="text-sm font-medium">{userData.height} cm</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 w-full">
                <h3 className="text-md font-medium mb-2">Dietary Preferences</h3>
                <div className="flex flex-wrap gap-2">
                  {userData.dietPreferences.map((pref, index) => (
                    <Badge key={index} className="bg-nutrition-lighter text-nutrition-secondary border-nutrition-light">
                      {pref}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 w-full">
                <h3 className="text-md font-medium mb-2">Allergies</h3>
                <div className="flex flex-wrap gap-2">
                  {userData.allergies.map((allergy, index) => (
                    <Badge key={index} variant="outline" className="bg-red-50 text-red-500 border-red-200">
                      {allergy}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 w-full">
                <h3 className="text-md font-medium mb-2">Health Goals</h3>
                <div className="flex flex-col gap-2">
                  {userData.goals.map((goal, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <ChevronRight className="h-4 w-4 text-nutrition-primary mr-2" />
                      {goal}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Update your account information and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="personal">
                <TabsList className="mb-6">
                  <TabsTrigger value="personal">Personal Info</TabsTrigger>
                  <TabsTrigger value="dietary">Dietary Preferences</TabsTrigger>
                  <TabsTrigger value="goals">Health Goals</TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal" className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" value="Alex" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" value="Johnson" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={userData.email} />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" value={userData.age} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input id="weight" type="number" value={userData.weight} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input id="height" type="number" value={userData.height} />
                    </div>
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button className="bg-nutrition-primary hover:bg-nutrition-secondary">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="dietary" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Diet Type</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {["Omnivore", "Vegetarian", "Vegan", "Pescatarian", "Keto", "Paleo", "Low FODMAP", "Plant-based", "Mediterranean"].map((diet) => (
                        <div key={diet} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={diet} 
                            className="mr-2"
                            checked={userData.dietPreferences.includes(diet)} 
                          />
                          <label htmlFor={diet} className="text-sm">{diet}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Allergies & Intolerances</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {["Dairy", "Gluten", "Nuts", "Eggs", "Shellfish", "Soy", "Fish", "Peanuts"].map((allergy) => (
                        <div key={allergy} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={allergy} 
                            className="mr-2"
                            checked={userData.allergies.includes(allergy)} 
                          />
                          <label htmlFor={allergy} className="text-sm">{allergy}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="otherPreferences">Other Dietary Preferences</Label>
                    <Input id="otherPreferences" placeholder="e.g., Low sugar, High protein, etc." value="Low sugar" />
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button className="bg-nutrition-primary hover:bg-nutrition-secondary">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="goals" className="space-y-4">
                  <div className="space-y-2">
                    <Label>Health Goals</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Weight loss", "Muscle gain", "Improve gut health", "Better sleep", "Increase energy", "Reduce inflammation", "Manage stress", "Balance blood sugar"].map((goal) => (
                        <div key={goal} className="flex items-center">
                          <input 
                            type="checkbox" 
                            id={goal} 
                            className="mr-2"
                            checked={userData.goals.includes(goal)} 
                          />
                          <label htmlFor={goal} className="text-sm">{goal}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="specificGoals">Specific Health Goals</Label>
                    <Input id="specificGoals" placeholder="e.g., Improve sleep quality, reduce bloating, etc." />
                  </div>
                  
                  <div className="pt-4 flex justify-end">
                    <Button className="bg-nutrition-primary hover:bg-nutrition-secondary">
                      <Save className="mr-2 h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Connected Devices</CardTitle>
              <CardDescription>
                Manage your connected wearable devices and data sources
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Fitbit_logo.svg/1280px-Fitbit_logo.svg.png" alt="Fitbit" className="h-8 w-auto mr-4" />
                    <div>
                      <p className="font-medium">Fitbit</p>
                      <p className="text-xs text-green-600">Connected</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" alt="Apple Health" className="h-8 w-auto mr-4" />
                    <div>
                      <p className="font-medium">Apple Health</p>
                      <p className="text-xs text-gray-500">Not connected</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Health_logo.svg/2560px-Samsung_Health_logo.svg.png" alt="Samsung Health" className="h-8 w-auto mr-4" />
                    <div>
                      <p className="font-medium">Samsung Health</p>
                      <p className="text-xs text-gray-500">Not connected</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Connect</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Viome_logo.svg/1200px-Viome_logo.svg.png" alt="Viome" className="h-8 w-auto mr-4" />
                    <div>
                      <p className="font-medium">Viome</p>
                      <p className="text-xs text-green-600">Connected</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Disconnect</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
