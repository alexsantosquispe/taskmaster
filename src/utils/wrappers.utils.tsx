import { ThemeProvider } from '@/contexts/ThemeProvider';
import { render } from '@testing-library/react';
import { type ReactElement, type ReactNode } from 'react';
import { useForm, type Control, type FieldValues } from 'react-hook-form';
import { BrowserRouter } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface RenderWithFormOptions {
  defaultValues: FieldValues;
  componentToRender: (control: Control<FieldValues>) => ReactElement;
}

export const renderWithForm = ({
  defaultValues,
  componentToRender
}: RenderWithFormOptions) => {
  const Wrapper = () => {
    const { control } = useForm<FieldValues>({ defaultValues });
    return componentToRender(control);
  };

  return render(<Wrapper />);
};

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center rounded border border-neutral-400 p-8',
        className
      )}
    >
      {children}
    </div>
  );
};

export const TestWrapper = ({ children }: WrapperProps) => {
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
