import { useEffect } from 'react';

const useKeyPress = (targetKey: string, callback: () => void) => {
  useEffect(() => {
    const onPressKey = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        callback();
      }
    };
    window.addEventListener('keydown', onPressKey);

    return () => {
      window.removeEventListener('keydown', onPressKey);
    };
  }, [targetKey, callback]);
};

export default useKeyPress;
