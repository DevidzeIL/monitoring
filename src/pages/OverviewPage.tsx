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
import { useLanguage } from "../hooks/use-language"

export default function OverviewPage() {
  const { t } = useLanguage()
  
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
      description: t.events.noHelmetInCraneZone,
      recommendation: `${t.events.recommendation}: ${t.events.notifyResponsible}`,
    },
    {
      id: 2,
      type: "info" as const,
      description: `${t.events.cargoLift}: ${t.events.hookZone}`,
      recommendation: `${t.events.recommendation}: ${t.events.checkNoPeople}`,
    },
    {
      id: 3,
      type: "danger" as const,
      description: t.events.safetyZoneViolation,
      recommendation: `${t.events.recommendation}: ${t.events.stopWork}`,
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
    { type: t.violations.noHelmet, count: 12, trend: "up" as const },
    { type: t.violations.inDangerZone, count: 8, trend: "down" as const },
    { type: t.violations.noSafety, count: 5, trend: "stable" as const },
    { type: t.violations.peopleUnderLoad, count: 3, trend: "down" as const },
  ]

  const mockTeams = [
    { name: `${t.teamsData.team} #1`, efficiency: 85, operations: 24, trend: 5 },
    { name: `${t.teamsData.team} #2`, efficiency: 78, operations: 18, trend: -2 },
    { name: `${t.teamsData.team} #3`, efficiency: 92, operations: 31, trend: 8 },
  ]

  const mockOperations = [
    {
      id: 1,
      type: t.operations.concreteBlocksLift,
      time: "14:20",
      status: "active" as const,
    },
    {
      id: 2,
      type: t.operations.rebarMove,
      time: "14:10",
      status: "completed" as const,
      duration: `12 ${t.operations.minutes}`,
    },
    {
      id: 3,
      type: t.operations.metalStructuresLift,
      time: "13:45",
      status: "completed" as const,
      duration: `18 ${t.operations.minutes}`,
    },
    {
      id: 4,
      type: t.operations.peopleInZone,
      time: "13:30",
      status: "warning" as const,
    },
  ]
  return (
    <div className="max-w-7xl mx-auto w-full space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title={t.overview.peopleOnSite}
          value={mockKPIData.peopleOnSite}
          indicator="purple"
        />
        <KPICard
          title={t.overview.inCraneZone}
          value={mockKPIData.peopleInCraneZone}
          indicator="blue"
        />
        <KPICard
          title={t.overview.withoutPPE}
          value={mockKPIData.withoutPPE}
          indicator="red"
        />
        <KPICard
          title={t.overview.craneLoad}
          value={`${mockKPIData.craneLoad}%`}
          indicator="green"
        />
      </div>

      {/* Video Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VideoSection
          title={`${t.overview.camera} • ${t.overview.endOfBoom}`}
          status={t.common.online}
          operation={`${t.overview.operation}: ${t.overview.liftOperation} • ${t.overview.eventMarkers}`}
          timelineMarkers={[
            { position: 20, color: "blue" },
            { position: 60, color: "red" },
          ]}
          imageSrc={camera1Image}
        />
        <VideoSection
          title={`${t.overview.camera} • ${t.overview.aboveTrolley}`}
          status={t.common.onlineOpt}
          operation={`${t.overview.cargoControl} • ${t.overview.hookZoneControl}`}
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
