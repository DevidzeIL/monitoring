import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Users, TrendingUp } from "lucide-react"
import { Progress } from "./ui/progress"

interface Team {
  name: string
  efficiency: number
  operations: number
  trend: number
}

interface TeamEfficiencyProps {
  teams: Team[]
}

export default function TeamEfficiency({ teams }: TeamEfficiencyProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <Users className="h-4 w-4" />
          Эффективность бригад
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teams.map((team, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    {team.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {team.operations} операций
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {team.trend > 0 && (
                    <div className="flex items-center gap-1 text-xs text-green-500">
                      <TrendingUp className="h-3 w-3" />
                      +{team.trend}%
                    </div>
                  )}
                  <span className="text-lg font-bold">{team.efficiency}%</span>
                </div>
              </div>
              <Progress value={team.efficiency} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
