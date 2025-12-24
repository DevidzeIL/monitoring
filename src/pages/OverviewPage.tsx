import KPICard from "../components/KPICard"
import VideoSection from "../components/VideoSection"
import ReportsSection from "../components/ReportsSection"
import EventsSection from "../components/EventsSection"
import ActivityChart from "../components/ActivityChart"
import EventsStats from "../components/EventsStats"
import TopViolations from "../components/TopViolations"
import TeamEfficiency from "../components/TeamEfficiency"
import SafetyTrend from "../components/SafetyTrend"
import OperationsTimeline from "../components/OperationsTimeline"
import camera1Image from "../assets/photo_2025-12-23_16-21-56.jpg"
import camera2Image from "../assets/photo_2025-12-23_16-22-26.jpg"

const mockKPIData = {
  peopleOnSite: 42,
  peopleInCraneZone: 9,
  withoutPPE: 3,
  craneLoad: 67,
}

const mockEvents = [
  {
    id: 1,
    type: "danger" as const,
    description: "Без каски в зоне крана",
    recommendation: "Рекомендация: уведомить ответственного",
  },
  {
    id: 2,
    type: "info" as const,
    description: "Подъём груза: зона под крюком",
    recommendation: "Рекомендация: проверить отсутствие людей",
  },
  {
    id: 3,
    type: "danger" as const,
    description: "Нарушение зоны безопасности",
    recommendation: "Рекомендация: остановить работы",
  },
]

const mockActivityData = [
  { time: "08:00", work: 85, idle: 15 },
  { time: "10:00", work: 72, idle: 28 },
  { time: "12:00", work: 65, idle: 35 },
  { time: "14:00", work: 78, idle: 22 },
  { time: "16:00", work: 82, idle: 18 },
]

const mockTopViolations = [
  { type: "Отсутствие каски", count: 12, trend: "up" as const },
  { type: "Нахождение в опасной зоне", count: 8, trend: "down" as const },
  { type: "Отсутствие страховки", count: 5, trend: "stable" as const },
  { type: "Люди под грузом", count: 3, trend: "down" as const },
]

const mockTeams = [
  { name: "Бригада №1", efficiency: 85, operations: 24, trend: 5 },
  { name: "Бригада №2", efficiency: 78, operations: 18, trend: -2 },
  { name: "Бригада №3", efficiency: 92, operations: 31, trend: 8 },
]

const mockOperations = [
  {
    id: 1,
    type: "Подъём бетонных блоков",
    time: "14:20",
    status: "active" as const,
  },
  {
    id: 2,
    type: "Перемещение арматуры",
    time: "14:10",
    status: "completed" as const,
    duration: "12 мин",
  },
  {
    id: 3,
    type: "Подъём металлоконструкций",
    time: "13:45",
    status: "completed" as const,
    duration: "18 мин",
  },
  {
    id: 4,
    type: "Обнаружены люди в зоне",
    time: "13:30",
    status: "warning" as const,
  },
]

export default function OverviewPage() {
  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Людей на площадке"
          value={mockKPIData.peopleOnSite}
          indicator="purple"
        />
        <KPICard
          title="В зоне крана"
          value={mockKPIData.peopleInCraneZone}
          indicator="blue"
        />
        <KPICard
          title="Без СИЗ"
          value={mockKPIData.withoutPPE}
          indicator="red"
        />
        <KPICard
          title="Загрузка крана"
          value={`${mockKPIData.craneLoad}%`}
          indicator="green"
        />
      </div>

      {/* Video Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VideoSection
          title="Камера • конец стрелы"
          status="Онлайн"
          operation="Операция: подъём груза • отметки событий на таймлайне"
          timelineMarkers={[
            { position: 20, color: "blue" },
            { position: 60, color: "red" },
          ]}
          imageSrc={camera1Image}
        />
        <VideoSection
          title="Камера • над тележкой (вд"
          status="Онлайн / опц."
          operation="Контроль груза • контроль зоны под крюком"
          timelineMarkers={[
            { position: 30, color: "red" },
            { position: 70, color: "blue" },
          ]}
          imageSrc={camera2Image}
        />
      </div>

      {/* Analytics Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <EventsStats
          today={15}
          yesterday={12}
          critical={3}
          warnings={5}
        />
        <SafetyTrend
          current={78}
          previous={72}
          trend="improving"
        />
        <TopViolations violations={mockTopViolations} />
      </div>

      {/* Analytics Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityChart data={mockActivityData} />
        <TeamEfficiency teams={mockTeams} />
      </div>

      {/* Operations Timeline */}
      <OperationsTimeline operations={mockOperations} />

      {/* Reports and Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ReportsSection />
        <EventsSection events={mockEvents} />
      </div>
    </div>
  )
}
