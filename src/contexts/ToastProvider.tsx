import type { ToastMessage } from '@/models/types';
import { useState, type ReactNode } from 'react';
import ToastContext from './ToastContext';

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = (toast: ToastMessage) => {
    setMessages((prev) => [toast, ...prev]);
  };

  const removeToast = (toastId: string) => {
    setMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== toastId)
    );
  };

  return (
    <ToastContext.Provider
      value={{
        messages,
        addToast,
        removeToast
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};
