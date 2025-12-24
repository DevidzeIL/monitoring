import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { AlertTriangle, HardHat, Users, MapPin } from "lucide-react"

const mockPPEData = {
  withoutHelmet: 3,
  withoutSafetyBelt: 2,
  peopleUnderLoad: 1,
  peopleInDangerZone: 5,
}

const mockViolations = [
  {
    id: 1,
    type: "helmet",
    person: "Рабочий #12",
    location: "Зона крана",
    time: "14:23",
    severity: "high" as const,
  },
  {
    id: 2,
    type: "belt",
    person: "Рабочий #8",
    location: "Высота 15м",
    time: "14:15",
    severity: "high" as const,
  },
  {
    id: 3,
    type: "danger_zone",
    person: "Рабочий #5",
    location: "Под грузом",
    time: "13:45",
    severity: "critical" as const,
  },
  {
    id: 4,
    type: "helmet",
    person: "Рабочий #21",
    location: "Склад",
    time: "13:30",
    severity: "medium" as const,
  },
]

export default function PPEAndZonesPage() {
  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Контроль СИЗ и опасных зон</h2>
        <p className="text-muted-foreground">
          Мониторинг соблюдения требований охраны труда в реальном времени
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Без каски
                </p>
                <p className="text-3xl font-bold text-card-foreground">
                  {mockPPEData.withoutHelmet}
                </p>
              </div>
              <HardHat className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Без страховки
                </p>
                <p className="text-3xl font-bold text-card-foreground">
                  {mockPPEData.withoutSafetyBelt}
                </p>
              </div>
              <Users className="h-8 w-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  Под грузом
                </p>
                <p className="text-3xl font-bold text-card-foreground">
                  {mockPPEData.peopleUnderLoad}
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  В опасной зоне
                </p>
                <p className="text-3xl font-bold text-card-foreground">
                  {mockPPEData.peopleInDangerZone}
                </p>
              </div>
              <MapPin className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Violations List */}
      <Card>
        <CardHeader>
          <CardTitle>Зафиксированные нарушения</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockViolations.map((violation) => (
              <div
                key={violation.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      violation.severity === "critical"
                        ? "bg-red-600"
                        : violation.severity === "high"
                        ? "bg-red-500"
                        : "bg-orange-500"
                    }`}
                  />
                  <div>
                    <p className="font-medium text-card-foreground">
                      {violation.person}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {violation.location} • {violation.time}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      violation.severity === "critical"
                        ? "destructive"
                        : violation.severity === "high"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {violation.type === "helmet"
                      ? "Нет каски"
                      : violation.type === "belt"
                      ? "Нет страховки"
                      : "Опасная зона"}
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
