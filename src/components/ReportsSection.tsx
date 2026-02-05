import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Play } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function ReportsSection() {
  const { t } = useLanguage()
  const [mode, setMode] = useState<"before-after" | "video">("before-after")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">{t.reports.shiftReport}</CardTitle>
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
  )
}
