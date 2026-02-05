import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Progress } from "../components/ui/progress"
import { Activity, Users } from "lucide-react"
import { useLanguage } from "../hooks/use-language"

const mockLoadingData = {
  currentShift: {
    workTime: 67,
    idleTime: 33,
    totalHours: 8,
  },
  today: {
    workTime: 72,
    idleTime: 28,
    operations: 47,
  },
  efficiency: {
    crane: 85,
    team: 78,
  },
}

const mockShifts = [
  { time: "08:00 - 16:00", work: 72, idle: 28, status: "completed" as const },
  { time: "00:00 - 08:00", work: 65, idle: 35, status: "completed" as const },
  { time: "16:00 - 00:00", work: 67, idle: 33, status: "active" as const },
]

export default function LoadingPage() {
  const { t, language } = useLanguage()
  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t.pageTitles.loading}</h2>
        <p className="text-muted-foreground">
          {language === "en"
            ? "Crane work and idle time analysis, team efficiency assessment"
            : "Анализ работы и простоя крана, оценка эффективности бригад"}
        </p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t.loading.currentShift}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">{t.loading.work}</span>
                <span className="text-sm font-medium">
                  {mockLoadingData.currentShift.workTime}%
                </span>
              </div>
              <Progress value={mockLoadingData.currentShift.workTime} />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-muted-foreground">{t.loading.idle}</span>
                <span className="text-sm font-medium">
                  {mockLoadingData.currentShift.idleTime}%
                </span>
              </div>
              <Progress value={mockLoadingData.currentShift.idleTime} />
            </div>
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {t.loading.hoursWorked}
                </span>
                <span className="text-2xl font-bold">
                  {mockLoadingData.currentShift.totalHours}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.loading.today}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t.loading.work}</p>
                <p className="text-3xl font-bold">{mockLoadingData.today.workTime}%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{t.loading.idle}</p>
                <p className="text-3xl font-bold">{mockLoadingData.today.idleTime}%</p>
              </div>
            </div>
            <div className="pt-4 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {t.loading.operationsCompleted}
                </span>
                <span className="text-2xl font-bold">
                  {mockLoadingData.today.operations}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Efficiency Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {t.loading.craneEfficiency}
                </p>
                <p className="text-3xl font-bold text-card-foreground">
                  {mockLoadingData.efficiency.crane}%
                </p>
              </div>
              <Activity className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {t.loading.teamEfficiency}
                </p>
                <p className="text-3xl font-bold text-card-foreground">
                  {mockLoadingData.efficiency.team}%
                </p>
              </div>
              <Users className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Shifts History */}
      <Card>
        <CardHeader>
          <CardTitle>{t.loading.shiftHistory}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockShifts.map((shift, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{shift.time}</span>
                  <span className="text-xs text-muted-foreground">
                    {shift.status === "active" ? t.ui.active : t.ui.completed}
                  </span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{t.loading.work}: {shift.work}%</span>
                    <span>{t.loading.idle}: {shift.idle}%</span>
                  </div>
                  <div className="flex gap-1 h-2">
                    <div
                      className="bg-blue-500 rounded"
                      style={{ width: `${shift.work}%` }}
                    />
                    <div
                      className="bg-muted rounded"
                      style={{ width: `${shift.idle}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
