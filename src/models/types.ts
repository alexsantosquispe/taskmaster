import type { ReactNode } from 'react';

export interface SvgIconProps {
  className?: string;
}

export type TabItem = {
  id: string;
  label: string;
  icon?: ReactNode;
};

export const PRIORITY_TYPES = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High'
} as const;

export type PriorityType = (typeof PRIORITY_TYPES)[keyof typeof PRIORITY_TYPES];

export const STATUS_TYPES = {
  BACKLOG: 'backlog',
  ON_HOLD: 'on-hold',
  IN_PROGRESS: 'in-progress',
  REVIEW: 'review',
  DONE: 'done'
} as const;

export type StatusType = (typeof STATUS_TYPES)[keyof typeof STATUS_TYPES];

export interface UserType {
  id: string;
  name: string;
  avatarUrl: string;
}

export type TaskType = {
  id: string;
  title: string;
  description: string;
  status: StatusType;
  priority: PriorityType;
  progress: number;
  createdAt: string; //datetime
  lastUpdate: string; //datetime
  assignee?: UserType;
};
