import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { useLanguage } from "@/hooks/use-language"

interface VideoSectionProps {
  title: string
  status: string
  operation: string
  timelineMarkers: Array<{ position: number; color: "blue" | "red" }>
  imageSrc?: string
}

export default function VideoSection({
  title,
  status,
  operation,
  timelineMarkers,
  imageSrc,
}: VideoSectionProps) {
  const { t } = useLanguage()
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">{title}</CardTitle>
          <Badge variant="secondary" className="text-xs">
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="w-full h-64 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-muted-foreground text-sm">{t.ui.videoPlayer}</span>
          )}
        </div>
        <div className="space-y-2">
          <div className="relative h-2 bg-muted rounded-full">
            {timelineMarkers.map((marker, index) => (
              <div
                key={index}
                className={`absolute w-3 h-3 rounded-full ${
                  marker.color === "blue" ? "bg-blue-500" : "bg-red-500"
                }`}
                style={{ left: `${marker.position}%`, top: "-4px" }}
              />
            ))}
          </div>
          <p className="text-xs text-muted-foreground">{operation}</p>
        </div>
      </CardContent>
    </Card>
  )
}
