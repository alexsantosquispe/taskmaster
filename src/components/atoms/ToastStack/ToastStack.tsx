import { useToast } from '@/hooks/useToast';
import { Toast } from '../Toast/Toast';

export const ToastStack = () => {
  const { messages, removeToast } = useToast();

  return (
    <section
      data-testid="toast-stack"
      className="absolute top-2 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-1"
    >
      {messages.map((item) => (
        <Toast key={item.id} {...item} onRemove={removeToast} />
      ))}
    </section>
  );
};
