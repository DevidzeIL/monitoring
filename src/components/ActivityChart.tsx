import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { useLanguage } from "@/hooks/use-language"

interface ActivityChartProps {
  data: Array<{ time: string; work: number; idle: number }>
}

export default function ActivityChart({ data }: ActivityChartProps) {
  const { t } = useLanguage()
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium">
          {t.components.craneActivity} {t.components.perShift}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{item.time}</span>
                <span>{t.loading.work}: {item.work}% | {t.loading.idle}: {item.idle}%</span>
              </div>
              <div className="flex gap-1 h-3">
                <div
                  className="bg-blue-500 rounded"
                  style={{ width: `${item.work}%` }}
                />
                <div
                  className="bg-muted rounded"
                  style={{ width: `${item.idle}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
