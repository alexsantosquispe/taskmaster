import { useToast } from '@/hooks/useToast';
import { Toast } from '../Toast/Toast';

export const ToastStack = () => {
  const { messages, removeToast } = useToast();

  return (
    <section className="fixed top-2 right-8 z-40 flex flex-col items-center gap-1">
      {messages.map((item) => (
        <Toast key={item.id} {...item} onRemove={removeToast} />
      ))}
    </section>
  );
};
