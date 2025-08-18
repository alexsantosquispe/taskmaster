import type { Control, FieldValues } from 'react-hook-form';

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

export interface NavBarLinkItemBase {
  id: string;
  label: string;
  path: string;
}

export interface NavBarLinkSubItem extends NavBarLinkItemBase {
  color: string;
}

export interface NavBarLinkItem extends NavBarLinkItemBase {
  icon?: ReactNode;
  subItems?: NavBarLinkSubItem[];
}

export type TaskType = {
  id: string;
  title: string;
  description: string;
  status: StatusType;
  priority: PriorityType;
  progress: number;
  createdAt: string; //datetime: 'YYYY-MM-DDThh:mm:ss-TZ'
  lastUpdate: string; //datetime
  assignee?: UserType;
};

export interface InputProps {
  label: string;
  name: string;
  control: Control<FieldValues>;
  placeholder?: string;
  type?: string;
  errorMessage?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
}

export type TextAreaProps = Omit<InputProps, 'type'> & {
  rows?: number;
  cols?: number;
};
