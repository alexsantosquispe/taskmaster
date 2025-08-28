import { Button } from '@/components/atoms/Button/Button';
import { useToast } from '@/hooks/useToast';

export const Dashboard = () => {
  const { addToast } = useToast();
  return (
    <div className="bg-primary/10 flex flex-1 flex-col items-center justify-center rounded-lg dark:bg-white/15">
      Dashboard
      <div className="flex gap-4">
        <Button
          label="Show toast default"
          onClick={() => {
            addToast({
              id: crypto.randomUUID(),
              title: 'Toast title',
              message: 'Toast message',
              duration: 5000
            });
          }}
          ariaLabel="Show toast"
        />
        <Button
          label="Show toast error"
          onClick={() => {
            addToast({
              id: crypto.randomUUID(),
              title: 'Toast title',
              message: 'Toast message',
              type: 'error',
              duration: 5000
            });
          }}
          ariaLabel="Show toast"
        />
        <Button
          label="Show toast success"
          onClick={() => {
            addToast({
              id: crypto.randomUUID(),
              title: 'Toast title',
              message: 'Toast message',
              type: 'success',
              duration: 5000
            });
          }}
          ariaLabel="Show toast"
        />
      </div>
    </div>
  );
};
