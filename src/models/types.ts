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

export const ALIGNMENT_TYPES = {
  TOP: 'top',
  BOTTOM: 'bottom',
  LEFT: 'left',
  RIGHT: 'right'
} as const;

export type AlignmentType =
  (typeof ALIGNMENT_TYPES)[keyof typeof ALIGNMENT_TYPES];

export const TOAST_TYPES = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error'
} as const;

export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type?: ToastType;
  duration?: number;
}

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

export interface ComponentWithController {
  name: string;
  control: Control<FieldValues>;
}

export interface InputProps extends ComponentWithController {
  label: string;
  placeholder?: string;
  type?: string;
  errorMessage?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  onChangeText?: (value: string) => void;
  className?: {
    container?: string;
    input?: string;
  };
}

export type TextAreaProps = Omit<InputProps, 'type'> & {
  rows?: number;
  cols?: number;
};

export interface ColorPickerProps {
  label?: string;
  value?: Option;
  onChangeColor?: (color: Option) => void;
  isRequired?: boolean;
  isDisabled?: boolean;
  className?: string;
}

export interface ColorPickerWithControllerProps
  extends ComponentWithController,
    ColorPickerProps {}

export type Option = {
  value: string;
  label: string;
};
