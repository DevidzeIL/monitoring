import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Video, Wifi, WifiOff } from "lucide-react"
import camera1Image from "../assets/photo_2025-12-23_16-21-56.jpg"
import camera2Image from "../assets/photo_2025-12-23_16-22-26.jpg"
import { useLanguage } from "../hooks/use-language"

export default function CamerasPage() {
  const { t } = useLanguage()
  
  const mockCameras = [
    {
      id: 1,
      name: `${t.overview.camera} • ${t.cameras.endOfBoom}`,
      status: "online" as const,
      location: t.cameras.endOfBoom,
      image: camera1Image,
    },
    {
      id: 2,
      name: `${t.overview.camera} • ${t.cameras.aboveTrolley}`,
      status: "online" as const,
      location: t.cameras.aboveTrolley,
      image: camera2Image,
    },
    {
      id: 3,
      name: `${t.overview.camera} • ${t.cameras.unloadingZone}`,
      status: "online" as const,
      location: t.cameras.unloadingZone,
      image: null,
    },
    {
      id: 4,
      name: `${t.overview.camera} • ${t.cameras.warehouse}`,
      status: "offline" as const,
      location: t.cameras.warehouse,
      image: null,
    },
    {
      id: 5,
      name: `${t.overview.camera} • ${t.cameras.mainEntrance}`,
      status: "online" as const,
      location: t.cameras.mainEntrance,
      image: null,
    },
    {
      id: 6,
      name: `${t.overview.camera} • ${t.cameras.craneZoneOverview}`,
      status: "online" as const,
      location: t.cameras.craneZoneOverview,
      image: null,
    },
  ]

  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">{t.cameras.title}</h2>
        <p className="text-muted-foreground">
          {t.cameras.description}
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {t.cameras.totalCameras}
                </p>
                <p className="text-3xl font-bold text-card-foreground">
                  {mockCameras.length}
                </p>
              </div>
              <Video className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {t.cameras.online}
                </p>
                <p className="text-3xl font-bold text-green-500">
                  {mockCameras.filter((c) => c.status === "online").length}
                </p>
              </div>
              <Wifi className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {t.cameras.offline}
                </p>
                <p className="text-3xl font-bold text-red-500">
                  {mockCameras.filter((c) => c.status === "offline").length}
                </p>
              </div>
              <WifiOff className="h-8 w-8 text-red-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cameras Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCameras.map((camera) => (
          <Card key={camera.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-base font-medium">
                  {camera.name}
                </CardTitle>
                <Badge
                  variant={camera.status === "online" ? "secondary" : "destructive"}
                  className="text-xs"
                >
                  {camera.status === "online" ? (
                    <>
                      <Wifi className="h-3 w-3 mr-1" />
                      {t.cameras.online}
                    </>
                  ) : (
                    <>
                      <WifiOff className="h-3 w-3 mr-1" />
                      {t.cameras.offline}
                    </>
                  )}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {camera.location}
              </p>
            </CardHeader>
            <CardContent>
              <div className="w-full h-48 bg-muted rounded-lg overflow-hidden flex items-center justify-center relative">
                {camera.image ? (
                  <img
                    src={camera.image}
                    alt={camera.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Video className="h-8 w-8 text-muted-foreground" />
                    <span className="text-muted-foreground text-sm">
                      {camera.status === "offline"
                        ? t.cameras.cameraUnavailable
                        : t.cameras.videoStream}
                    </span>
                  </div>
                )}
                {camera.status === "online" && (
                  <div className="absolute top-2 right-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
