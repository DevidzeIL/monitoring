import { Card, CardContent } from "./ui/card"

interface KPICardProps {
  title: string
  value: string | number
  indicator: "purple" | "blue" | "red" | "green"
}

const indicatorColors = {
  purple: "bg-purple-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  green: "bg-green-500",
}

export default function KPICard({ title, value, indicator }: KPICardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
            <p className="text-3xl font-bold text-card-foreground">{value}</p>
          </div>
          <div className={`w-3 h-3 rounded-full ${indicatorColors[indicator]}`} />
        </div>
      </CardContent>
    </Card>
  )
}
