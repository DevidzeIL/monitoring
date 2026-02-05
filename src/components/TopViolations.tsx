import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useLanguage } from "@/hooks/use-language"

interface Violation {
  type: string
  count: number
  trend: "up" | "down" | "stable"
}

interface TopViolationsProps {
  violations: Violation[]
}

export default function TopViolations({ violations }: TopViolationsProps) {
  const { t } = useLanguage()
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">{t.ui.frequentViolations}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {violations.map((violation, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 border rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    {violation.type}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {violation.count} {t.ui.cases}
                  </p>
                </div>
              </div>
              <Badge
                variant={
                  violation.trend === "up"
                    ? "destructive"
                    : violation.trend === "down"
                    ? "secondary"
                    : "secondary"
                }
              >
                {violation.trend === "up" ? "↑" : violation.trend === "down" ? "↓" : "→"}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
