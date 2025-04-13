
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { progressData } from "@/lib/mockData";

const WeeklyProgress = () => {
  // Transform data for the chart
  const chartData = progressData.gutHealth.dates.map((date, index) => ({
    date,
    gutHealth: progressData.gutHealth.scores[index],
    energy: progressData.energy.scores[index],
    sleep: progressData.sleep.scores[index]
  }));

  return (
    <Card className="col-span-full">
      <CardHeader className="pb-2">
        <CardTitle>Weekly Progress</CardTitle>
        <CardDescription>Track your health improvements over time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorGutHealth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7FC8A9" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#7FC8A9" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5D8A82" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#5D8A82" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSleep" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#A0D9A6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#A0D9A6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis 
                tick={{ fontSize: 12 }} 
                tickLine={false} 
                axisLine={false} 
                domain={[40, 100]} 
                tickFormatter={(value) => `${value}`} 
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  border: 'none'
                }}
                formatter={(value: number) => [`${value}`, '']}
              />
              <Area 
                type="monotone" 
                dataKey="gutHealth" 
                stroke="#7FC8A9" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorGutHealth)" 
                name="Gut Health"
              />
              <Area 
                type="monotone" 
                dataKey="energy" 
                stroke="#5D8A82" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorEnergy)" 
                name="Energy"
              />
              <Area 
                type="monotone" 
                dataKey="sleep" 
                stroke="#A0D9A6" 
                strokeWidth={2}
                fillOpacity={1} 
                fill="url(#colorSleep)" 
                name="Sleep Quality"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-center mt-4 space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-nutrition-primary rounded-full mr-2"></div>
            <span className="text-sm">Gut Health</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-nutrition-secondary rounded-full mr-2"></div>
            <span className="text-sm">Energy</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#A0D9A6] rounded-full mr-2"></div>
            <span className="text-sm">Sleep Quality</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeeklyProgress;
