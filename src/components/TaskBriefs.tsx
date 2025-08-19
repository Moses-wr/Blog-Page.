import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, TrendingUp } from "lucide-react";

const TaskBriefs = () => {
  const tasks = [
    {
      id: 1,
      title: "Review Your Investment Portfolio",
      description: " Understand the perfect time to rebalance your investments and harvest tax losses.",
      priority: "high",
      deadline: "Every End Year",
      icon: TrendingUp
    },
    {
      id: 2,
      title: "Maximize Your Daily increament Contributions plan",
      description: "Ensure you're hitting the yearly  savings of at least Ksh 66,795 before year-end.",
      priority: "medium",
      deadline: "Yearly",
      icon: CheckCircle
    },
    {
      id: 3,
      title: "Plan Your 2025 Budget",
      description: "Start early with next year's financial goals and spending categories.",
      priority: "low",
      deadline: "End of the Period",
      icon: Clock
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600 bg-red-50 border-red-200";
      case "medium": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "low": return "text-green-600 bg-green-50 border-green-200";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Your Financial Task Briefs</h2>
        <p className="text-muted-foreground">Priority actions to keep your finances on track</p>
      </div>
      
      <div className="space-y-4">
        {tasks.map((task) => {
          const IconComponent = task.icon;
          return (
            <Card key={task.id} className="transition-shadow hover:shadow-md">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className={`rounded-full p-2 ${getPriorityColor(task.priority)}`}>
                    <IconComponent size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold">{task.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        <div className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(task.priority)}`}>
                          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">Due: {task.deadline}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Button size="sm" variant="outline">Mark Complete</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TaskBriefs;
