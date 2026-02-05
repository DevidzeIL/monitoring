import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Shield, TrendingDown } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface SafetyTrendProps {
  current: number
  previous: number
  trend: "improving" | "worsening" | "stable"
}

export default function SafetyTrend({
  current,
  previous,
  trend,
}: SafetyTrendProps) {
  const { t } = useLanguage()
  const change = current - previous
  const changePercent =
    previous > 0 ? Math.round((Math.abs(change) / previous) * 100) : 0

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <Shield className="h-4 w-4" />
          {t.components.safetyIndex}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-bold text-card-foreground">
                {current}
              </span>
              <span className="text-sm text-muted-foreground">/100</span>
            </div>
            {trend === "improving" && (
              <div className="flex items-center gap-2 text-sm text-green-500">
                <TrendingDown className="h-4 w-4" />
                {t.components.improvement} {changePercent}% {t.components.perWeek}
              </div>
            )}
            {trend === "worsening" && (
              <div className="flex items-center gap-2 text-sm text-red-500">
                <TrendingDown className="h-4 w-4 rotate-180" />
                {t.components.worsening} {changePercent}% {t.components.perWeek}
              </div>
            )}
            {trend === "stable" && (
              <div className="text-sm text-muted-foreground">
                {t.components.stable}
              </div>
            )}
          </div>
          <div className="pt-4 border-t">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{t.components.previousPeriod}</span>
              <span className="font-medium">{previous}/100</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
