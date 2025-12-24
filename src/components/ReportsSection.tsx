import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Play } from "lucide-react"

export default function ReportsSection() {
  const [mode, setMode] = useState<"before-after" | "video">("before-after")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">Отчёт по смене</CardTitle>
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
            До / После
          </button>
          <button
            onClick={() => setMode("video")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              mode === "video"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
            }`}
          >
            Ускоренное видео
          </button>
        </div>
        {mode === "before-after" ? (
          <div className="grid grid-cols-2 gap-4">
            <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-sm">До</span>
            </div>
            <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
              <span className="text-muted-foreground text-sm">После</span>
            </div>
          </div>
        ) : (
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center relative">
            <div className="flex flex-col items-center gap-2">
              <Play className="h-12 w-12 text-muted-foreground" />
              <span className="text-muted-foreground text-sm">
                Ускоренное видео
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
