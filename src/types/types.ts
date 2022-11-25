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