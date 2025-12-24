import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import VideoSection from "../components/VideoSection"
import camera1Image from "../assets/photo_2025-12-23_16-21-56.jpg"
import camera2Image from "../assets/photo_2025-12-23_16-22-26.jpg"
import { Package, AlertCircle, CheckCircle2, Clock } from "lucide-react"

const mockCargoOperations = [
  {
    id: 1,
    type: "lift",
    status: "active" as const,
    description: "Подъём бетонных блоков",
    startTime: "14:20",
    zone: "Зона разгрузки",
  },
  {
    id: 2,
    type: "move",
    status: "completed" as const,
    description: "Перемещение арматуры",
    startTime: "13:45",
    endTime: "14:10",
    zone: "Склад → Стройплощадка",
  },
  {
    id: 3,
    type: "danger",
    status: "warning" as const,
    description: "Обнаружены люди в зоне под крюком",
    startTime: "13:30",
    zone: "Зона подъёма",
  },
]

const mockCargoStats = {
  totalOperations: 47,
  activeOperations: 1,
  completedToday: 46,
  averageTime: "12 мин",
}

export default function CargoPage() {
  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Контроль операций с грузом</h2>
        <p className="text-muted-foreground">
          Мониторинг подъёма и перемещения груза, контроль опасных ситуаций
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Всего операций
                </p>
                <p className="text-3xl font-bold text-card-foreground">
                  {mockCargoStats.totalOperations}
                </p>
              </div>
              <Package className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Активных
                </p>
                <p className="text-3xl font-bold text-card-foreground">
                  {mockCargoStats.activeOperations}
                </p>
              </div>
              <Clock className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Завершено сегодня
                </p>
                <p className="text-3xl font-bold text-card-foreground">
                  {mockCargoStats.completedToday}
                </p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Среднее время
                </p>
                <p className="text-3xl font-bold text-card-foreground">
                  {mockCargoStats.averageTime}
                </p>
              </div>
              <Clock className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Video Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VideoSection
          title="Камера • конец стрелы"
          status="Онлайн"
          operation="Мониторинг подъёма груза"
          timelineMarkers={[
            { position: 20, color: "blue" },
            { position: 60, color: "red" },
          ]}
          imageSrc={camera1Image}
        />
        <VideoSection
          title="Камера • над тележкой"
          status="Онлайн"
          operation="Контроль зоны под крюком"
          timelineMarkers={[
            { position: 30, color: "red" },
            { position: 70, color: "blue" },
          ]}
          imageSrc={camera2Image}
        />
      </div>

      {/* Operations List */}
      <Card>
        <CardHeader>
          <CardTitle>Операции с грузом</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockCargoOperations.map((operation) => (
              <div
                key={operation.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      operation.status === "active"
                        ? "bg-blue-500"
                        : operation.status === "warning"
                        ? "bg-red-500"
                        : "bg-green-500"
                    }`}
                  />
                  <div>
                    <p className="font-medium text-card-foreground">
                      {operation.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {operation.zone} • {operation.startTime}
                      {operation.endTime && ` - ${operation.endTime}`}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {operation.status === "warning" && (
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  )}
                  <Badge
                    variant={
                      operation.status === "active"
                        ? "default"
                        : operation.status === "warning"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {operation.status === "active"
                      ? "Активна"
                      : operation.status === "warning"
                      ? "Предупреждение"
                      : "Завершена"}
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
