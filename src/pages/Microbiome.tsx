
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { Info, Upload } from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { microbiomeData } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const Microbiome = () => {
  const COLORS = ['#7FC8A9', '#D5ECD0', '#E3F4E4', '#5D8A82', '#A0D9A6'];
  
  const pieData = microbiomeData.keyBacteria.map(bacteria => ({
    name: bacteria.name,
    value: bacteria.percentage,
    status: bacteria.status,
    description: bacteria.description
  }));
  
  // Mock comparison data for before/after treatment
  const comparisonData = [
    { name: "Bifidobacterium", before: 8, after: 12 },
    { name: "Lactobacillus", before: 5, after: 8 },
    { name: "Akkermansia", before: 1, after: 3 },
    { name: "Bacteroides", before: 32, after: 26 },
    { name: "Prevotella", before: 12, after: 15 }
  ];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="dashboard-title">Gut Microbiome Analysis</h1>
        <p className="dashboard-subtitle">Detailed insights into your gut microbiome and personalized recommendations</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Microbiome Composition</CardTitle>
            <CardDescription>
              Diversity score: {microbiomeData.diversity}% 
              <span className="text-xs text-green-500 ml-2">+5% from last test</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                      labelLine={false}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`${value}%`, 'Percentage']}
                      contentStyle={{
                        backgroundColor: 'white',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        border: 'none',
                        padding: '0.5rem'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Key Bacteria Populations</h3>
                <div className="space-y-4">
                  {microbiomeData.keyBacteria.map((bacteria, index) => (
                    <div key={bacteria.name} className="flex flex-col">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div 
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                          ></div>
                          <span className="font-medium">{bacteria.name}</span>
                        </div>
                        <Badge 
                          variant="outline" 
                          className={cn(
                            bacteria.status === "optimal" && "bg-green-50 text-green-600 border-green-200",
                            bacteria.status === "low" && "bg-amber-50 text-amber-600 border-amber-200",
                            bacteria.status === "high" && "bg-blue-50 text-blue-600 border-blue-200"
                          )}
                        >
                          {bacteria.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">{bacteria.description}</p>
                      <div className="mt-1 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full"
                          style={{ 
                            width: `${bacteria.percentage}%`, 
                            backgroundColor: COLORS[index % COLORS.length] 
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-100">
              <h3 className="text-lg font-medium mb-4">Before & After Treatment Comparison</h3>
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={comparisonData}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} strokeOpacity={0.1} />
                    <XAxis type="number" tickFormatter={(value) => `${value}%`} />
                    <YAxis type="category" dataKey="name" width={100} />
                    <Tooltip 
                      formatter={(value: number) => [`${value}%`, '']}
                      contentStyle={{
                        backgroundColor: 'white',
                        borderRadius: '0.5rem',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                        border: 'none'
                      }}
                    />
                    <Bar dataKey="before" fill="#D5ECD0" name="Initial Test" />
                    <Bar dataKey="after" fill="#7FC8A9" name="Current" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center mt-2 space-x-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-[#D5ECD0] rounded-full mr-2"></div>
                  <span className="text-sm">Initial Test</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-nutrition-primary rounded-full mr-2"></div>
                  <span className="text-sm">Current</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload New Test</CardTitle>
              <CardDescription>
                Update your microbiome data with a new test result
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                <p className="text-sm text-gray-500 mb-4">
                  Drag and drop your test report file, or click to browse
                </p>
                <Button>Upload File</Button>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                Supported formats: PDF, CSV from Viome, Thryve, Ombre, or uBiome
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Nutritional Recommendations</CardTitle>
              <CardDescription>
                Based on your microbiome analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {microbiomeData.recommendations.map((recommendation, index) => (
                  <div key={index} className="bg-nutrition-lighter rounded-lg p-4">
                    <div className="flex justify-between mb-1">
                      <h4 className="font-medium">{recommendation.food}</h4>
                      <Info className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600">{recommendation.reason}</p>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-4 bg-nutrition-primary hover:bg-nutrition-secondary">
                Get Full Diet Plan
              </Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Test History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">November 15, 2023</p>
                    <p className="text-sm text-gray-500">Viome Test</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">August 3, 2023</p>
                    <p className="text-sm text-gray-500">Thryve Test</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium">March 22, 2023</p>
                    <p className="text-sm text-gray-500">Ombre Test</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Microbiome;
