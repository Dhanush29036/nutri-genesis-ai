
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { healthMetrics } from "@/lib/mockData";
import { cn } from "@/lib/utils";

const HealthMetricsCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Health Metrics</CardTitle>
        <CardDescription>Your current health status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {healthMetrics.currentStatus.map((metric) => (
            <div key={metric.name} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{metric.name}</p>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  <span 
                    className={cn(
                      "flex items-center text-xs font-medium",
                      metric.status === "improving" ? "text-green-500" : "text-red-500"
                    )}
                  >
                    {metric.change.startsWith("+") ? (
                      <ArrowUpIcon className="h-3 w-3 mr-1" />
                    ) : (
                      <ArrowDownIcon className="h-3 w-3 mr-1" />
                    )}
                    {metric.change}
                  </span>
                </div>
              </div>
              <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div 
                  className={cn(
                    "h-full",
                    metric.status === "improving" ? "bg-nutrition-primary" : "bg-red-400"
                  )}
                  style={{ width: `${metric.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 space-y-2">
          <h4 className="text-sm font-medium">Recommendations</h4>
          <ul className="space-y-1">
            {healthMetrics.recommendations.map((recommendation, index) => (
              <li key={index} className="text-sm flex items-start">
                <span className="text-nutrition-primary mr-2">•</span>
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthMetricsCard;
