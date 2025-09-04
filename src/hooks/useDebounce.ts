import { useCallback, useRef } from 'react';

export const useDebounce = (
  callback: (value: string) => void,
  delay: number | undefined = 1000
) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounceCallback = useCallback(
    (value: string) => {
      if (timer.current) clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay]
  );

  return debounceCallback;
};
