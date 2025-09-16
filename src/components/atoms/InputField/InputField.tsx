import { INPUT_FIELD_ERROR, INPUT_FIELD_STYLES } from '@/styles';
import { useCallback, useState } from 'react';

import { Controller } from 'react-hook-form';
import { EyeClosedIcon } from '@/icons/EyeClosedIcon';
import { EyeIcon } from '@/icons/EyeIcon';
import { IconButton } from '../IconButton/IconButton';
import type { InputProps } from '@/models/types';
import cn from 'clsx';
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
  onChangeText,
  autoComplete = 'off',
  className
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordType = showPassword ? 'text' : 'password';

  const toggleShowPassword = useCallback(
    () => setShowPassword((prev) => !prev),
    [setShowPassword]
  );

  return (
    <Controller
      control={control}
      name={name}
      shouldUnregister={true}
      aria-label={label}
      render={({ field: { onChange, value } }) => {
        if (typeof onChangeText === 'function' && value !== undefined)
          onChangeText(value);

        return (
          <div
            className={twMerge(
              'relative flex w-full flex-col',
              className?.container
            )}
          >
            <label
              htmlFor={name}
              className={twMerge('mb-0.5 text-sm', className?.label)}
            >
              {label}
              {isRequired && <span className="text-rose-600">&nbsp;*</span>}
            </label>

            <input
              id={name}
              name={name}
              onChange={onChange}
              value={value}
              placeholder={placeholder}
              type={type === 'password' ? passwordType : type}
              disabled={isDisabled}
              autoComplete={autoComplete}
              className={twMerge(
                INPUT_FIELD_STYLES,
                cn({
                  'border-rose-600 dark:border-rose-400': !!errorMessage,
                  'bg-neutral-100 placeholder:text-neutral-300 hover:cursor-not-allowed dark:bg-white/15 dark:placeholder:text-white/10':
                    isDisabled
                }),
                className?.input
              )}
            />
            {type === 'password' && (
              <IconButton
                ariaLabel={showPassword ? 'Hide password' : 'Show password'}
                icon={
                  showPassword ? (
                    <EyeIcon className="size-4" />
                  ) : (
                    <EyeClosedIcon className="size-4" />
                  )
                }
                onClick={toggleShowPassword}
                className="absolute right-1 bottom-[0.3125rem] rounded-md p-1.5 text-neutral-400 dark:text-white/50"
                isDefault={false}
              />
            )}
            {errorMessage && (
              <span data-testid="error-message" className={INPUT_FIELD_ERROR}>
                {errorMessage}
              </span>
            )}
          </div>
        );
      }}
    />
  );
};
