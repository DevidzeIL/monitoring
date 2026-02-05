export type Language = "en" | "ru" | "de" | "es";

export interface Translations {
  // Navigation
  nav: {
    overview: string;
    cameras: string;
    ppe: string;
    cargo: string;
    loading: string;
    reports: string;
    events: string;
  };
  
  // User menu
  userMenu: {
    profile: string;
    settings: string;
    notifications: string;
    darkTheme: string;
    lightTheme: string;
    logout: string;
    language: string;
    english: string;
    russian: string;
    german: string;
    spanish: string;
  };
  
  // Teams/Sites
  teams: {
    sites: string;
    addSite: string;
    site: string;
    active: string;
    inactive: string;
  };
  
  // Page titles
  pageTitles: {
    overview: string;
    ppe: string;
    cargo: string;
    loading: string;
    reports: string;
    events: string;
    cameras: string;
  };
  
  // Common
  common: {
    updated: string;
    online: string;
    onlineOpt: string;
  };
  
  // Overview page
  overview: {
    peopleOnSite: string;
    inCraneZone: string;
    withoutPPE: string;
    craneLoad: string;
    camera: string;
    endOfBoom: string;
    aboveTrolley: string;
    operation: string;
    liftOperation: string;
    eventMarkers: string;
    cargoControl: string;
    hookZoneControl: string;
  };
  
  // Events
  events: {
    title: string;
    last24Hours: string;
    noHelmetInCraneZone: string;
    cargoLift: string;
    hookZone: string;
    safetyZoneViolation: string;
    recommendation: string;
    notifyResponsible: string;
    checkNoPeople: string;
    stopWork: string;
  };
  
  // Violations
  violations: {
    noHelmet: string;
    inDangerZone: string;
    noSafety: string;
    peopleUnderLoad: string;
  };
  
  // Teams
  teamsData: {
    team: string;
  };
  
  // Operations
  operations: {
    concreteBlocksLift: string;
    rebarMove: string;
    metalStructuresLift: string;
    peopleInZone: string;
    minutes: string;
  };
  
  // Additional UI strings
  ui: {
    videoPlayer: string;
    last24Hours: string;
    frequentViolations: string;
    cases: string;
    teamEfficiency: string;
    operations: string;
    lastOperations: string;
    completed: string;
    active: string;
    warning: string;
    filter: string;
    critical: string;
    info: string;
  };
  
  // Loading page
  loading: {
    currentShift: string;
    work: string;
    idle: string;
    hoursWorked: string;
    today: string;
    operationsCompleted: string;
    craneEfficiency: string;
    teamEfficiency: string;
    shiftHistory: string;
  };
  
  // PPE page
  ppe: {
    withoutHelmet: string;
    withoutSafety: string;
    underLoad: string;
    inDangerZone: string;
    recordedViolations: string;
    noHelmet: string;
    noSafety: string;
    dangerZone: string;
    worker: string;
    craneZone: string;
    height: string;
    underCargo: string;
    warehouse: string;
  };
  
  // Reports page
  reports: {
    title: string;
    ppeViolations: string;
    description: string;
    eventsRecorded: string;
    video: string;
    photos: string;
    download: string;
    shiftReport: string;
    beforeAfter: string;
    timeLapseVideo: string;
    before: string;
    after: string;
    periodStats: string;
    totalOperations: string;
    averageLoad: string;
    dangerousSituations: string;
  };
  
  // Cargo page
  cargo: {
    title: string;
    description: string;
    totalOperations: string;
    active: string;
    completedToday: string;
    averageTime: string;
    cargoOperations: string;
    unloadingZone: string;
    warehouseToSite: string;
    liftZone: string;
    monitoringCargoLift: string;
    hookZoneControl: string;
  };
  
  // Cameras page
  cameras: {
    title: string;
    description: string;
    totalCameras: string;
    online: string;
    offline: string;
    endOfBoom: string;
    aboveTrolley: string;
    unloadingZone: string;
    warehouse: string;
    mainEntrance: string;
    craneZoneOverview: string;
    cameraUnavailable: string;
    videoStream: string;
  };
  
  // Events page
  eventsPage: {
    description: string;
    filter: string;
    worker: string;
    craneOperator: string;
    craneZone: string;
    liftZone: string;
    dangerZone: string;
    constructionSite: string;
    evacuateZone: string;
    operationCompleted: string;
  };
  
  // Events stats
  eventsStats: {
    title: string;
    eventsToday: string;
    yesterday: string;
    events: string;
    critical: string;
    warnings: string;
  };
  
  // Additional components
  components: {
    safetyIndex: string;
    improvement: string;
    worsening: string;
    stable: string;
    perWeek: string;
    previousPeriod: string;
    craneActivity: string;
    perShift: string;
  };
}

import { translationsEn } from "./translations.en";
import { translationsRu } from "./translations.ru";
import { translationsDe } from "./translations.de";
import { translationsEs } from "./translations.es";

export const translations: Record<Language, Translations> = {
  en: translationsEn,
  ru: translationsRu,
  de: translationsDe,
  es: translationsEs,
};
