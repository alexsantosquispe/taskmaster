import { COLORS, DEFAULT_COLOR } from '@/constants';
import type {
  ColorPickerProps,
  ColorPickerWithControllerProps,
  Option
} from '@/models/types';

import cn from 'clsx';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { IconButton } from '../IconButton/IconButton';

export const ColorPicker = ({
  label,
  value,
  isRequired = false,
  isDisabled = false,
  onChangeColor,
  className
}: ColorPickerProps) => {
  const [currentColor, setCurrentColor] = useState<Option>(
    value || DEFAULT_COLOR
  );
  const [isPalletColorOpen, setIsPalletColorOpen] = useState(false);

  const togglePalletColor = () => {
    setIsPalletColorOpen(!isPalletColorOpen);
  };

  const onSelectColor = (color: Option) => {
    setCurrentColor(color);
    if (typeof onChangeColor === 'function') {
      onChangeColor(color);
    }
    setIsPalletColorOpen(false);
  };

  return (
    <div className="relative flex flex-col">
      {label && (
        <label className="mb-0.5 text-sm">
          {label}
          {isRequired && <span className="text-rose-600">&nbsp;*</span>}
        </label>
      )}
      <IconButton
        ariaLabel="Color picker button"
        icon={
          <div
            className={twMerge('h-5 w-5 rounded-full', currentColor.label)}
          />
        }
        onClick={togglePalletColor}
        isDisable={isDisabled}
        className={twMerge(
          'border border-neutral-200 dark:border-white/20',
          className
        )}
        tooltipMessage="Select color"
      />
      {isPalletColorOpen && (
        <div
          data-testid="color-pallet"
          className="dark:bg-primary absolute top-full right-0 mt-1 w-[12.25rem] rounded-lg border border-neutral-200 bg-white p-2 shadow-md dark:border-white/20 dark:shadow-none"
        >
          <div className="flex flex-wrap gap-4">
            {COLORS.map((color, index) => {
              const isSelected = color.value === currentColor.value;
              return (
                <button
                  key={`${color}-${index}`}
                  type="button"
                  aria-label={`Color code ${color.label}`}
                  onClick={() => onSelectColor(color)}
                  className={twMerge(
                    'hover:ring-accent dark:hover:ring-accent-dark h-4 w-4 rounded-full hover:cursor-pointer hover:ring-2 hover:ring-offset-2',
                    color.label,
                    cn({
                      'ring-accent dark:ring-accent-dark ring-2 ring-offset-2':
                        isSelected
                    })
                  )}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export const ColorPickerWithController = ({
  name,
  control,
  ...props
}: ColorPickerWithControllerProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <ColorPicker {...props} onChangeColor={onChange} value={value} />
      )}
    />
  );
};
