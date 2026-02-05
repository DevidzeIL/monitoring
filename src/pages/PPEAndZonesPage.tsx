import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { AlertTriangle, HardHat, Users, MapPin } from "lucide-react"
import { useLanguage } from "../hooks/use-language"

export default function PPEAndZonesPage() {
  const { t, language } = useLanguage()
  
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
      person: `${t.ppe.worker} #12`,
      location: t.ppe.craneZone,
      time: "14:23",
      severity: "high" as const,
    },
    {
      id: 2,
      type: "belt",
      person: `${t.ppe.worker} #8`,
      location: language === "en" ? "Height 15m" : "Высота 15м",
      time: "14:15",
      severity: "high" as const,
    },
    {
      id: 3,
      type: "danger_zone",
      person: `${t.ppe.worker} #5`,
      location: t.ppe.underCargo,
      time: "13:45",
      severity: "critical" as const,
    },
    {
      id: 4,
      type: "helmet",
      person: `${t.ppe.worker} #21`,
      location: t.ppe.warehouse,
      time: "13:30",
      severity: "medium" as const,
    },
  ]
  
  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t.pageTitles.ppe}</h2>
        <p className="text-muted-foreground">
          {language === "en"
            ? "Real-time monitoring of occupational safety requirements compliance"
            : "Мониторинг соблюдения требований охраны труда в реальном времени"}
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {t.ppe.withoutHelmet}
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
                  {t.ppe.withoutSafety}
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
                  {t.ppe.underLoad}
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
                  {t.ppe.inDangerZone}
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
          <CardTitle>{t.ppe.recordedViolations}</CardTitle>
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
                      ? t.ppe.noHelmet
                      : violation.type === "belt"
                      ? t.ppe.noSafety
                      : t.ppe.dangerZone}
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
