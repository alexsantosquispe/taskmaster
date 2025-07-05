import { LaptopIcon, MoonIcon, SunIcon } from '../../../icons';

import cn from 'clsx';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { Theme } from '../../../contexts/ThemeContext';
import { useTheme } from '../../../hooks/useTheme';

const THEME_BUTTONS = [
  {
    id: Theme.system,
    label: 'System',
    icon: <LaptopIcon />
  },
  {
    id: Theme.light,
    label: 'Light',
    icon: <SunIcon />
  },
  {
    id: Theme.dark,
    label: 'Dark',
    icon: <MoonIcon />
  }
];

interface ThemeButtonProps {
  isCollapsed?: boolean;
}

const ThemeButton = ({ isCollapsed }: ThemeButtonProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={twMerge(
        'flex w-fit self-center rounded-lg bg-neutral-100 p-1 text-[0.8125rem] dark:bg-neutral-800',
        cn({
          'flex-col gap-y-0.5': isCollapsed,
          'flex-row': !isCollapsed
        })
      )}
    >
      {THEME_BUTTONS.map((item) => (
        <button
          key={item.id}
          className={twMerge(
            'flex items-center gap-1 rounded-md px-2 py-1 transition-colors duration-150 ease-in-out hover:cursor-pointer',
            cn({
              'dark:bg-primary bg-white shadow': item.id === theme,
              'w-20': !isCollapsed,
              'p-1': isCollapsed
            })
          )}
          onClick={() => setTheme(item.id)}
        >
          <div>{item.icon}</div>
          {!isCollapsed && <label>{item.label}</label>}
        </button>
      ))}
    </div>
  );
};

export default memo(ThemeButton);
