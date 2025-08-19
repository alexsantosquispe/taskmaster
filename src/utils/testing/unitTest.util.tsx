import { ThemeProvider } from '@/contexts/ThemeProvider';
import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-center rounded border border-neutral-400 p-8">
      {children}
    </div>
  );
};

export const TestWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        {children}
      </BrowserRouter>
    </ThemeProvider>
  );
};
