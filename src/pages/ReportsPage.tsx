import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Calendar, Download, Play, Image as ImageIcon } from "lucide-react"
import { useLanguage } from "../hooks/use-language"

const mockReports = [
  {
    id: 1,
    date: "23.12.2025",
    shift: "08:00 - 16:00",
    type: "daily" as const,
    hasVideo: true,
    hasImages: true,
    events: 12,
  },
  {
    id: 2,
    date: "22.12.2025",
    shift: "08:00 - 16:00",
    type: "daily" as const,
    hasVideo: true,
    hasImages: true,
    events: 8,
  },
  {
    id: 3,
    date: "21.12.2025",
    shift: "08:00 - 16:00",
    type: "daily" as const,
    hasVideo: true,
    hasImages: true,
    events: 15,
  },
]

export default function ReportsPage() {
  const { t } = useLanguage()
  const [mode, setMode] = useState<"before-after" | "video">("before-after")

  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t.reports.title}</h2>
        <p className="text-muted-foreground">
          {t.reports.description}
        </p>
      </div>

      {/* Reports List */}
      <div className="grid grid-cols-1 gap-4">
        {mockReports.map((report) => (
          <Card key={report.id}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-card-foreground">
                      {report.date} • {report.shift}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {t.reports.eventsRecorded}: {report.events}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {report.hasVideo && (
                    <Badge variant="secondary" className="gap-1">
                      <Play className="h-3 w-3" />
                      {t.reports.video}
                    </Badge>
                  )}
                  {report.hasImages && (
                    <Badge variant="secondary" className="gap-1">
                      <ImageIcon className="h-3 w-3" />
                      {t.reports.photos}
                    </Badge>
                  )}
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    {t.reports.download}
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Current Report Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t.reports.shiftReport}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <button
                onClick={() => setMode("before-after")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  mode === "before-after"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {t.reports.beforeAfter}
              </button>
              <button
                onClick={() => setMode("video")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  mode === "video"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                }`}
              >
                {t.reports.timeLapseVideo}
              </button>
            </div>
            {mode === "before-after" ? (
              <div className="grid grid-cols-2 gap-4">
                <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">{t.reports.before}</span>
                </div>
                <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">{t.reports.after}</span>
                </div>
              </div>
            ) : (
              <div className="h-64 bg-muted rounded-lg flex items-center justify-center relative">
                <div className="flex flex-col items-center gap-2">
                  <Play className="h-12 w-12 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">
                    {t.reports.timeLapseVideo}
                  </span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t.reports.periodStats}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  {t.reports.totalOperations}
                </span>
                <span className="font-medium">142</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  {t.reports.averageLoad}
                </span>
                <span className="font-medium">68%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  {t.reports.ppeViolations}
                </span>
                <span className="font-medium">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">
                  {t.reports.dangerousSituations}
                </span>
                <span className="font-medium">5</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
