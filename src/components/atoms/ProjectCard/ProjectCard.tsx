import { formatToFriendlyDate } from '@/utils/dates.utils';
import cn from 'clsx';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import type { ProjectDTO } from '../../../services/apiTypes';
import { ProjectCardContextMenu } from './components/ProjectCardContextMenu/ProjectCardContextMenu';

interface ProjectCardProps extends ProjectDTO {
  isSmall?: boolean;
}

interface CodeBadgeProps {
  color: string;
  code: string;
}

export const CodeBadge = ({ color, code }: CodeBadgeProps) => {
  return (
    <div className="flex items-center gap-1 rounded-md border border-neutral-200 px-1.5 py-1 font-semibold dark:border-white/20">
      <div
        style={{ backgroundColor: color }}
        className={twMerge('h-4 w-4 rounded-full')}
      />
      <span className="text-xs">{code}</span>
    </div>
  );
};

export const ProjectCard = ({
  id,
  name,
  description,
  update_date: lastUpdateDate,
  color,
  code,
  isSmall = false
}: ProjectCardProps) => {
  const timeUpdated = formatToFriendlyDate(lastUpdateDate);

  return (
    <article
      key={id}
      className={twMerge(
        'dark:bg-primary flex h-[8.25rem] flex-col rounded-lg border border-neutral-200 px-4 py-3 text-sm dark:border-white/20',
        cn({ 'h-24': isSmall })
      )}
    >
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center justify-between gap-2">
          <Link
            to={`/projects/${id}`}
            className="hover:text-accent dark:hover:text-accent-dark hover:underline"
          >
            <h3 className="line-clamp-1 text-base font-semibold">{name}</h3>
          </Link>
          <ProjectCardContextMenu />
        </div>

        {!isSmall && (
          <p className="line-clamp-2 flex-1 text-neutral-700 dark:text-neutral-200">
            {description}
          </p>
        )}
      </div>

      <div className="flex items-baseline justify-between gap-2">
        <span className="text-xs text-neutral-500 dark:text-neutral-300">{`updated ${timeUpdated}`}</span>
        <CodeBadge color={color} code={code} />
      </div>
    </article>
  );
};
