import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { AlertCircle, Clock, Filter } from "lucide-react"

const mockEvents = [
  {
    id: 1,
    type: "danger" as const,
    description: "Без каски в зоне крана",
    recommendation: "Рекомендация: уведомить ответственного",
    time: "14:23",
    date: "23.12.2025",
    person: "Рабочий #12",
    location: "Зона крана",
  },
  {
    id: 2,
    type: "info" as const,
    description: "Подъём груза: зона под крюком",
    recommendation: "Рекомендация: проверить отсутствие людей",
    time: "14:15",
    date: "23.12.2025",
    person: "Оператор крана",
    location: "Зона подъёма",
  },
  {
    id: 3,
    type: "danger" as const,
    description: "Нарушение зоны безопасности",
    recommendation: "Рекомендация: остановить работы",
    time: "13:45",
    date: "23.12.2025",
    person: "Рабочий #5",
    location: "Опасная зона",
  },
  {
    id: 4,
    type: "warning" as const,
    description: "Люди под грузом",
    recommendation: "Рекомендация: немедленно эвакуировать зону",
    time: "13:30",
    date: "23.12.2025",
    person: "Рабочий #8, Рабочий #9",
    location: "Зона под крюком",
  },
  {
    id: 5,
    type: "info" as const,
    description: "Завершение операции с грузом",
    recommendation: "Операция выполнена успешно",
    time: "13:15",
    date: "23.12.2025",
    person: "Оператор крана",
    location: "Стройплощадка",
  },
]

export default function EventsPage() {
  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">Журнал событий</h2>
          <p className="text-muted-foreground">
            Все зафиксированные события и инциденты для разборов и контроля
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-md text-sm font-medium text-secondary-foreground flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Фильтр
          </button>
        </div>
      </div>

      {/* Events List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>События за последние 24 часа</CardTitle>
            <Badge variant="secondary" className="text-xs">
              Последние 24ч
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockEvents.map((event) => (
              <div
                key={event.id}
                className="flex gap-4 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    event.type === "danger"
                      ? "bg-red-500"
                      : event.type === "warning"
                      ? "bg-orange-500"
                      : "bg-blue-500"
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-medium text-card-foreground">
                        {event.description}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {event.person} • {event.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {event.time}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {event.recommendation}
                  </p>
                </div>
                <div>
                  <Badge
                    variant={
                      event.type === "danger"
                        ? "destructive"
                        : event.type === "warning"
                        ? "secondary"
                        : "secondary"
                    }
                  >
                    {event.type === "danger"
                      ? "Критично"
                      : event.type === "warning"
                      ? "Предупреждение"
                      : "Информация"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
