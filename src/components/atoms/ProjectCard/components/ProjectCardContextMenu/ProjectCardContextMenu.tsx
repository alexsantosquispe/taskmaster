import { ContextMenu } from '@/components/atoms/ContextMenu/ContextMenu';
import { EllipsisVerticalIcon } from '@/icons';
import type { Option } from '@/models/types';

const MENU_OPTIONS: Option[] = [
  { label: 'Edit', value: 'edit' },
  { label: 'Delete', value: 'delete' }
];

export const ProjectCardContextMenu = () => {
  return (
    <ContextMenu
      ariaLabel="Project options"
      options={MENU_OPTIONS}
      onSelectOption={(option) => console.log(option)}
      icon={<EllipsisVerticalIcon className="size-4" />}
      className={{
        mainContainer: '-mr-2',
        contentWrapper: 'min-w-[6rem]'
      }}
    />
  );
};
