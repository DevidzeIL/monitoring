import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { AlertTriangle, TrendingUp, TrendingDown } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface EventsStatsProps {
  today: number
  yesterday: number
  critical: number
  warnings: number
}

export default function EventsStats({
  today,
  yesterday,
  critical,
  warnings,
}: EventsStatsProps) {
  const { t } = useLanguage()
  const change = today - yesterday
  const changePercent = yesterday > 0 ? Math.round((change / yesterday) * 100) : 0

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">{t.eventsStats.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">{t.eventsStats.eventsToday}</span>
            <div className="flex items-center gap-2">
              {change !== 0 && (
                <div
                  className={`flex items-center gap-1 text-xs ${
                    change > 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {change > 0 ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {Math.abs(changePercent)}%
                </div>
              )}
              <span className="text-2xl font-bold">{today}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            {t.eventsStats.yesterday}: {yesterday} {t.eventsStats.events}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <span className="text-sm text-muted-foreground">{t.eventsStats.critical}</span>
            </div>
            <p className="text-xl font-bold text-red-500">{critical}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-muted-foreground">{t.eventsStats.warnings}</span>
            </div>
            <p className="text-xl font-bold text-orange-500">{warnings}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
