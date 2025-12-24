import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Clock, CheckCircle2, AlertCircle } from "lucide-react"
import { Badge } from "./ui/badge"

interface Operation {
  id: number
  type: string
  time: string
  status: "completed" | "active" | "warning"
  duration?: string
}

interface OperationsTimelineProps {
  operations: Operation[]
}

export default function OperationsTimeline({
  operations,
}: OperationsTimelineProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Последние операции</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {operations.map((operation) => (
            <div
              key={operation.id}
              className="flex items-center gap-3 p-3 border rounded-lg"
            >
              <div
                className={`flex-shrink-0 ${
                  operation.status === "completed"
                    ? "text-green-500"
                    : operation.status === "warning"
                    ? "text-red-500"
                    : "text-blue-500"
                }`}
              >
                {operation.status === "completed" ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : operation.status === "warning" ? (
                  <AlertCircle className="h-5 w-5" />
                ) : (
                  <Clock className="h-5 w-5" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-card-foreground truncate">
                  {operation.type}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs text-muted-foreground">
                    {operation.time}
                  </span>
                  {operation.duration && (
                    <>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">
                        {operation.duration}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <Badge
                variant={
                  operation.status === "completed"
                    ? "secondary"
                    : operation.status === "warning"
                    ? "destructive"
                    : "default"
                }
              >
                {operation.status === "completed"
                  ? "Завершена"
                  : operation.status === "warning"
                  ? "Предупреждение"
                  : "Активна"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
