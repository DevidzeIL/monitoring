import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Clock, Filter } from "lucide-react"
import { useLanguage } from "../hooks/use-language"

export default function EventsPage() {
  const { t, language } = useLanguage()
  
  const mockEvents = [
    {
      id: 1,
      type: "danger" as const,
      description: t.events.noHelmetInCraneZone,
      recommendation: `${t.events.recommendation}: ${t.events.notifyResponsible}`,
      time: "14:23",
      date: "23.12.2025",
      person: `${t.eventsPage.worker} #12`,
      location: t.eventsPage.craneZone,
    },
    {
      id: 2,
      type: "info" as const,
      description: `${t.events.cargoLift}: ${t.events.hookZone}`,
      recommendation: `${t.events.recommendation}: ${t.events.checkNoPeople}`,
      time: "14:15",
      date: "23.12.2025",
      person: t.eventsPage.craneOperator,
      location: t.eventsPage.liftZone,
    },
    {
      id: 3,
      type: "danger" as const,
      description: t.events.safetyZoneViolation,
      recommendation: `${t.events.recommendation}: ${t.events.stopWork}`,
      time: "13:45",
      date: "23.12.2025",
      person: `${t.eventsPage.worker} #5`,
      location: t.eventsPage.dangerZone,
    },
    {
      id: 4,
      type: "warning" as const,
      description: t.violations.peopleUnderLoad,
      recommendation: `${t.events.recommendation}: ${t.eventsPage.evacuateZone}`,
      time: "13:30",
      date: "23.12.2025",
      person: `${t.eventsPage.worker} #8, ${t.eventsPage.worker} #9`,
      location: t.events.hookZone,
    },
    {
      id: 5,
      type: "info" as const,
      description: language === "en" ? "Cargo operation completed" : "Завершение операции с грузом",
      recommendation: t.eventsPage.operationCompleted,
      time: "13:15",
      date: "23.12.2025",
      person: t.eventsPage.craneOperator,
      location: t.eventsPage.constructionSite,
    },
  ]
  
  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{t.pageTitles.events}</h2>
          <p className="text-muted-foreground">
            {t.eventsPage.description}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-md text-sm font-medium text-secondary-foreground flex items-center gap-2">
            <Filter className="h-4 w-4" />
            {t.eventsPage.filter}
          </button>
        </div>
      </div>

      {/* Events List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{t.events.last24Hours}</CardTitle>
            <Badge variant="secondary" className="text-xs">
              {t.ui.last24Hours}
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
                      ? t.ui.critical
                      : event.type === "warning"
                      ? t.ui.warning
                      : t.ui.info}
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
