export const PRIORITY_TYPES = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High'
} as const;

export type PriorityType = (typeof PRIORITY_TYPES)[keyof typeof PRIORITY_TYPES];

export const STATUS_TYPES = {
  BACKLOG: 'Backlog',
  TODO: 'To-Do',
  IN_PROGRESS: 'In Progress',
  REVIEW: 'Review',
  DONE: 'Done'
} as const;

export type StatusType = (typeof STATUS_TYPES)[keyof typeof STATUS_TYPES];

export interface SvgIconProps {
  className?: string;
}

export type LSValuesTypes = string | number | boolean;

export type TabItem = {
  id: string;
  label: string;
};

export type TaskType = {
  id: string;
  title: string;
  description: string;
  status: StatusType;
  priority: PriorityType;
  progress: number;
  createdAt: string; //datetime
  lastUpdate: string; //datetime
};
