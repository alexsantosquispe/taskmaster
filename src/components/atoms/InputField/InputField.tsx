import { INPUT_FIELD_ERROR, INPUT_FIELD_STYLES } from '@/styles';

import type { InputProps } from '@/models/types';
import cn from 'clsx';
import { Controller } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

export const InputField = ({
  label,
  name,
  control,
  placeholder,
  type = 'text',
  isDisabled,
  errorMessage = '',
  isRequired = false,
  className
}: InputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => {
        return (
          <div className={twMerge('flex w-full flex-col', className)}>
            <label htmlFor={name} className="mb-0.5 text-sm">
              {label}
              {isRequired && <span className="text-rose-600">&nbsp;*</span>}
            </label>
            <input
              id={name}
              name={name}
              onChange={onChange}
              value={value}
              placeholder={placeholder}
              type={type}
              disabled={isDisabled}
              className={twMerge(
                INPUT_FIELD_STYLES,
                cn({
                  'border-rose-600 dark:border-rose-400': !!errorMessage,
                  'bg-gray-100 placeholder:text-gray-200 hover:cursor-not-allowed dark:bg-white/15 dark:placeholder:text-white/10':
                    isDisabled
                })
              )}
            />
            {errorMessage && (
              <span className={INPUT_FIELD_ERROR}>{errorMessage}</span>
            )}
          </div>
        );
      }}
    />
  );
};
