import { ThemeProvider } from '@/contexts/ThemeProvider';
import { render } from '@testing-library/react';
import { type ReactElement, type ReactNode } from 'react';
import { useForm, type Control, type FieldValues } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';

interface RenderWithFormOptions {
  componentToRender: (control: Control<FieldValues>) => ReactElement;
}

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

export const renderWithForm = ({
  componentToRender
}: RenderWithFormOptions) => {
  const Wrapper = () => {
    const { control } = useForm<FieldValues>();
    return componentToRender(control);
  };

  return render(<Wrapper />);
};
