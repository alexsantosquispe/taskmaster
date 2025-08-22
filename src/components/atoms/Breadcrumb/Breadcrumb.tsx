import cn from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronUpIcon } from '../../../icons';

type BreadcrumbItem = {
  id: string;
  label: string;
  href: string;
};

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumb = ({ items, className }: BreadcrumbProps) => {
  return (
    <div
      className={twMerge(
        'text-primary/80 flex items-center gap-2 text-[0.8125rem] dark:text-white/70',
        className
      )}
    >
      {items.map((item, index) => {
        const isLastItem = index === items.length - 1;
        return (
          <div key={item.id} className="flex items-center gap-2 font-medium">
            <a
              href={item.href}
              className={twMerge(
                'hover:cursor-pointer',
                cn({ 'text-primary font-semibold dark:text-white': isLastItem })
              )}
            >
              <span>{item.label}</span>
            </a>
            {!isLastItem && <ChevronUpIcon className="size-3 rotate-90" />}
          </div>
        );
      })}
    </div>
  );
};
