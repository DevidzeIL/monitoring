import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"

interface Event {
  id: number
  type: "danger" | "info"
  description: string
  recommendation: string
}

interface EventsSectionProps {
  events: Event[]
}

export default function EventsSection({ events }: EventsSectionProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">События</CardTitle>
          <Badge variant="secondary" className="text-xs">
            Последние 24ч
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="flex gap-3">
              <div
                className={`w-2 h-2 rounded-full mt-2 ${
                  event.type === "danger" ? "bg-red-500" : "bg-blue-500"
                }`}
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-card-foreground">
                  {event.description}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {event.recommendation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
