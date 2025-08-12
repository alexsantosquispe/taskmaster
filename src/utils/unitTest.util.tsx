import { BrowserRouter } from 'react-router-dom';
import type { ReactNode } from 'react';
import { ThemeProvider } from '../contexts/ThemeProvider';

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
