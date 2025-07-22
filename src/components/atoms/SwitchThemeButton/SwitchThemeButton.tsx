import { LaptopIcon, MoonIcon, SunIcon } from '../../../icons';

import cn from 'clsx';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { Theme, type ThemeType } from '../../../contexts/ThemeContext';
import { useTheme } from '../../../hooks/useTheme';
import { TabBarItem } from '../TabBar/components/TabBarItem';

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

interface SwitchThemeButtonProps {
  isCollapsed?: boolean;
}

const SwitchThemeButton = ({ isCollapsed }: SwitchThemeButtonProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={twMerge(
        'flex w-fit self-center rounded-lg bg-neutral-100 p-0.5 text-[0.8125rem] dark:bg-neutral-800',
        cn({
          'flex-col gap-y-0.5': isCollapsed,
          'flex-row': !isCollapsed
        })
      )}
    >
      {THEME_BUTTONS.map((item) => (
        <TabBarItem
          key={item.id}
          tabItem={item}
          isSelected={theme === item.id}
          onSelectTab={() => setTheme(item.id as ThemeType)}
          className={twMerge(
            'px-2 md:w-fit',
            cn({
              'dark:bg-primary bg-white shadow': item.id === theme,
              'md:w-20': !isCollapsed,
              'p-1': isCollapsed
            })
          )}
          isCollapsed={isCollapsed}
        />
      ))}
    </div>
  );
};

export default memo(SwitchThemeButton);
