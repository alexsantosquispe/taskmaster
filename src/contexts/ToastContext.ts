import type { ToastMessage } from '@/models/types';
import { createContext } from 'react';

export interface ToastContextType {
  messages: ToastMessage[];
  addToast: (toast: ToastMessage) => void;
  removeToast: (toastId: string) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

export default ToastContext;
