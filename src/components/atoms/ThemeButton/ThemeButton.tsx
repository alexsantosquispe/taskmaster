import cn from 'clsx';
import { useState, type ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { Theme, type ThemeType } from '../../../contexts/ThemeContext';
import { LaptopIcon, MoonIcon, SunIcon } from '../../../icons';

const THEME_BUTTONS: { id: ThemeType; label: string; icon: ReactNode }[] = [
  {
    id: 'light',
    label: 'Light',
    icon: <SunIcon />
  },
  {
    id: 'dark',
    label: 'Dark',
    icon: <MoonIcon />
  },
  {
    id: 'system',
    label: 'System',
    icon: <LaptopIcon />
  }
];

interface ThemeButtonProps {
  isCollapsed?: boolean;
}

export const ThemeButton = ({ isCollapsed }: ThemeButtonProps) => {
  const [activeTheme, setActiveTheme] = useState<ThemeType>(Theme.light);

  return (
    <div
      className={twMerge(
        'flex w-fit gap-1 self-center rounded-lg bg-gray-100 p-1 text-[0.8125rem]',
        cn({
          'flex-col': isCollapsed,
          'flex-row': !isCollapsed
        })
      )}
    >
      {THEME_BUTTONS.map((item) => (
        <button
          key={item.id}
          className={twMerge(
            'flex max-w-20 items-center gap-1 rounded-md px-2 py-1 hover:cursor-pointer',
            cn({
              'bg-white shadow': item.id === activeTheme,
              'p-1': isCollapsed
            })
          )}
          onClick={() => {
            setActiveTheme(item.id);
          }}
        >
          <div>{item.icon}</div>
          {!isCollapsed && <label>{item.label}</label>}
        </button>
      ))}
    </div>
  );
};
