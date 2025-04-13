
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { microbiomeData } from "@/lib/mockData";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { cn } from "@/lib/utils";

const MicrobiomeCard = () => {
  const COLORS = ['#7FC8A9', '#D5ECD0', '#E3F4E4', '#5D8A82', '#A0D9A6'];
  
  const pieData = microbiomeData.keyBacteria.map(bacteria => ({
    name: bacteria.name,
    value: bacteria.percentage,
    status: bacteria.status,
    description: bacteria.description
  }));

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Gut Microbiome</CardTitle>
        <CardDescription>
          Diversity score: {microbiomeData.diversity}% 
          <span className="text-xs text-green-500 ml-2">+5% from last test</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
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
        
        <div className="mt-4 space-y-2">
          <h4 className="text-sm font-medium">Key Bacteria</h4>
          <div className="grid grid-cols-2 gap-2">
            {microbiomeData.keyBacteria.map((bacteria) => (
              <div key={bacteria.name} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">{bacteria.name}</span>
                  <Badge 
                    variant="outline" 
                    className={cn(
                      "text-xs",
                      bacteria.status === "optimal" && "bg-green-50 text-green-600 border-green-200",
                      bacteria.status === "low" && "bg-amber-50 text-amber-600 border-amber-200",
                      bacteria.status === "high" && "bg-blue-50 text-blue-600 border-blue-200"
                    )}
                  >
                    {bacteria.status}
                  </Badge>
                </div>
                <span className="text-xs text-gray-500">{bacteria.description}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            Last updated: {microbiomeData.lastUpdated}
          </div>
          <div className="mt-2">
            <a href="/microbiome" className="text-sm text-nutrition-primary hover:underline">
              View detailed report →
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MicrobiomeCard;
