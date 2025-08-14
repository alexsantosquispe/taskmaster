import { twMerge } from 'tailwind-merge';
import type { ProjectDTO } from '../../../services/apiTypes';
import { formatDateToDayMonth } from '../../../utils';

export const ProjectCard = ({
  id,
  name,
  description,
  create_date: createDate,
  color,
  code
}: ProjectDTO) => {
  const lastUpdateDate = formatDateToDayMonth(createDate);

  return (
    <article
      key={id}
      className="dark:bg-primary flex h-40 flex-col rounded-lg border border-neutral-200 px-4 py-3 text-sm dark:border-white/20"
    >
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold">{name}</h3>

          <div className="flex items-center gap-2 rounded-md border border-neutral-200 px-2 py-1 font-semibold dark:border-white/20">
            <div
              style={{ backgroundColor: color }}
              className={twMerge('h-4 w-4 rounded-full')}
            />
            <span>{code}</span>
          </div>
        </div>

        <p className="line-clamp-2 flex-1 text-neutral-700 dark:text-neutral-200">
          {description}
        </p>
      </div>

      <span className="self-end text-[0.8125rem] text-neutral-500 dark:text-neutral-300">{`Updated: ${lastUpdateDate}`}</span>
    </article>
  );
};
