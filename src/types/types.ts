export enum DocumentStatus {
  processing,
  checking,
  approved,
  missing,
  rejected
}

export interface ProfileStatus {
  name: string;
  default?: boolean;
}

export enum ArrowDirections {
  up,
  down,
  left,
  right,
}

export interface ScheduleEvent {
  header?: string,
  organaizer?: string,
  memberCount?: string,
  eventStatus?: string,
  date?: string,
  eventImg?: string,
  schedule?: boolean,
}