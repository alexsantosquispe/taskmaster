import { ChevronUpIcon } from '../../../icons';
import TabBar from '../../atoms/TabBar/TabBar';

const TABS = [
  {
    id: '1',
    label: 'Board'
  },
  {
    id: '2',
    label: 'To-Do'
  },
  {
    id: '3',
    label: 'Table'
  },
  {
    id: '4',
    label: 'List'
  }
];

export const Detail = () => {
  return (
    <section className="flex h-full w-full flex-col gap-6 p-2">
      <div className="flex flex-col gap-2">
        {/* TODO: Create a component for breadcrumbs */}
        <div className="flex items-center gap-2 text-[0.8125rem] text-neutral-400 dark:text-white/70">
          <span>Projects</span>
          <ChevronUpIcon className="size-3 rotate-90" />
          <span className="text-neutral-700 dark:text-white">
            TaskMaster Mobile App
          </span>
        </div>

        <h2 className="text-2xl leading-12 font-semibold">
          TaskMaster Mobile App
        </h2>
      </div>

      {/* Board Section */}
      <div className="flex w-full flex-col gap-3">
        <TabBar tabs={TABS} />
        <div>board section</div>
      </div>
    </section>
  );
};
