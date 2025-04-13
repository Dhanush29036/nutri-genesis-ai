
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { wearableData } from "@/lib/mockData";
import { Activity, Heart, Timer, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const WearableSync = () => {
  // Transform sleep data for chart
  const sleepData = wearableData.sleep.weeklyData.map((hours, index) => ({
    day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index],
    hours
  }));

  // Transform heart rate data for chart
  const heartRateData = wearableData.heartRate.hourlyData.map((rate, index) => ({
    time: index.toString(),
    rate
  }));

  // Transform steps data for chart
  const stepsData = wearableData.activity.weeklySteps.map((steps, index) => ({
    day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index],
    steps
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Sleep Duration</p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">{wearableData.sleep.avgDuration}</h3>
                  <p className="ml-1 text-sm">hrs</p>
                </div>
              </div>
              <div className="bg-nutrition-light p-2 rounded-md">
                <Timer className="h-5 w-5 text-nutrition-primary" />
              </div>
            </div>
            <Progress value={wearableData.sleep.qualityScore} className="h-1 mt-4" />
            <p className="text-xs text-gray-500 mt-1">
              Quality score: {wearableData.sleep.qualityScore}%
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Heart Rate</p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">{wearableData.heartRate.current}</h3>
                  <p className="ml-1 text-sm">bpm</p>
                </div>
              </div>
              <div className="bg-nutrition-light p-2 rounded-md">
                <Heart className="h-5 w-5 text-nutrition-primary" />
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="text-xs">
                <p className="text-gray-500">Min</p>
                <p className="font-medium">{wearableData.heartRate.min} bpm</p>
              </div>
              <div className="text-xs">
                <p className="text-gray-500">Resting</p>
                <p className="font-medium">{wearableData.heartRate.resting} bpm</p>
              </div>
              <div className="text-xs">
                <p className="text-gray-500">Max</p>
                <p className="font-medium">{wearableData.heartRate.max} bpm</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Activity</p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">{wearableData.activity.dailySteps.toLocaleString()}</h3>
                  <p className="ml-1 text-sm">steps</p>
                </div>
              </div>
              <div className="bg-nutrition-light p-2 rounded-md">
                <Activity className="h-5 w-5 text-nutrition-primary" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Daily goal: 10,000</span>
                <Badge variant="outline" className="bg-nutrition-lighter text-nutrition-secondary border-nutrition-light">
                  {Math.round((wearableData.activity.dailySteps / 10000) * 100)}%
                </Badge>
              </div>
              <Progress value={(wearableData.activity.dailySteps / 10000) * 100} className="h-1 mt-1" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white">
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">Stress Level</p>
                <div className="flex items-baseline">
                  <h3 className="text-2xl font-bold">{wearableData.stress.dailyScore}</h3>
                  <p className="ml-1 text-sm">/100</p>
                </div>
              </div>
              <div className="bg-nutrition-light p-2 rounded-md">
                <Zap className="h-5 w-5 text-nutrition-primary" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">Low stress</span>
                <Badge 
                  variant="outline" 
                  className={
                    wearableData.stress.dailyScore < 30 
                      ? "bg-green-50 text-green-600 border-green-200" 
                      : wearableData.stress.dailyScore < 70 
                        ? "bg-amber-50 text-amber-600 border-amber-200"
                        : "bg-red-50 text-red-600 border-red-200"
                  }
                >
                  {wearableData.stress.dailyScore < 30 
                    ? "Low" 
                    : wearableData.stress.dailyScore < 70 
                      ? "Moderate"
                      : "High"}
                </Badge>
              </div>
              <Progress 
                value={100 - wearableData.stress.dailyScore} 
                className={`h-1 mt-1 ${
                  wearableData.stress.dailyScore < 30 
                    ? "bg-green-100" 
                    : wearableData.stress.dailyScore < 70 
                      ? "bg-amber-100"
                      : "bg-red-100"
                }`}
              />
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Sleep Patterns</CardTitle>
            <CardDescription>Last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sleepData}>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} vertical={false} />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} />
                  <YAxis domain={[0, 10]} axisLine={false} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      border: 'none'
                    }}
                    formatter={(value: number) => [`${value} hours`, 'Sleep']}
                  />
                  <Bar dataKey="hours" fill="#7FC8A9" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="bg-nutrition-lighter p-3 rounded-lg">
                <p className="text-xs text-gray-500">Deep Sleep</p>
                <p className="font-medium">{wearableData.sleep.deepSleepPercentage}%</p>
              </div>
              <div className="bg-nutrition-lighter p-3 rounded-lg">
                <p className="text-xs text-gray-500">REM Sleep</p>
                <p className="font-medium">{wearableData.sleep.remSleepPercentage}%</p>
              </div>
              <div className="bg-nutrition-lighter p-3 rounded-lg">
                <p className="text-xs text-gray-500">Light Sleep</p>
                <p className="font-medium">{wearableData.sleep.lightSleepPercentage}%</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Heart Rate</CardTitle>
            <CardDescription>24-hour monitoring</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={heartRateData}>
                  <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} vertical={false} />
                  <XAxis 
                    dataKey="time" 
                    axisLine={false} 
                    tickLine={false}
                    ticks={['0', '6', '12', '18', '23']}
                    tickFormatter={(value) => {
                      return `${value}:00`;
                    }}
                  />
                  <YAxis 
                    domain={[50, 150]} 
                    axisLine={false} 
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      borderRadius: '0.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                      border: 'none'
                    }}
                    formatter={(value: number) => [`${value} bpm`, 'Heart Rate']}
                    labelFormatter={(value) => `${value}:00`}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#5D8A82" 
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="bg-nutrition-lighter p-3 rounded-lg">
                <p className="text-xs text-gray-500">Average</p>
                <p className="font-medium">{Math.round(wearableData.heartRate.hourlyData.reduce((a, b) => a + b, 0) / wearableData.heartRate.hourlyData.length)} bpm</p>
              </div>
              <div className="bg-nutrition-lighter p-3 rounded-lg">
                <p className="text-xs text-gray-500">Resting</p>
                <p className="font-medium">{wearableData.heartRate.resting} bpm</p>
              </div>
              <div className="bg-nutrition-lighter p-3 rounded-lg">
                <p className="text-xs text-gray-500">Max Today</p>
                <p className="font-medium">{wearableData.heartRate.max} bpm</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WearableSync;
