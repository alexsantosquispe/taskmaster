import { Suspense, lazy, useState } from 'react';

import { ContextMenu } from '@/components/atoms/ContextMenu/ContextMenu';
import { EllipsisVerticalIcon } from '@/icons';
import type { Option } from '@/models/types';
import { PROJECT_MENU_OPTIONS } from '@/constants';
import type { ProjectDTO } from '@/services/apiTypes';

const DeleteProjectModal = lazy(
  () => import('@/components/molecules/DeleteProjectModal/DeleteProjectModal')
);
const EditProjectModal = lazy(
  () => import('@/components/molecules/EditProjectModal/EditProjectModal')
);

interface ProjectCardContextMenuProps {
  projectItem: Omit<ProjectDTO, 'create_date' | 'update_date'>;
}

export const ProjectCardContextMenu = ({
  projectItem
}: ProjectCardContextMenuProps) => {
  const [modalType, setModalType] = useState<'edit' | 'delete' | null>(null);

  const handleSelectOption = (option: Option) => {
    if (option.value === 'edit') setModalType('edit');
    if (option.value === 'delete') setModalType('delete');
  };

  return (
    <>
      <ContextMenu
        ariaLabel="Project options"
        options={PROJECT_MENU_OPTIONS}
        onSelectOption={handleSelectOption}
        icon={<EllipsisVerticalIcon className="size-4" />}
        className={{
          mainContainer: '-mr-2',
          contentWrapper: 'min-w-[6rem]',
          button:
            'text-primary/80 hover:text-primary dark:text-white/70 dark:hover:text-white'
        }}
      />

      {modalType === 'delete' && (
        <Suspense>
          <DeleteProjectModal
            projectId={projectItem.id}
            projectName={projectItem.name}
            onClose={() => setModalType(null)}
          />
        </Suspense>
      )}

      {modalType === 'edit' && (
        <Suspense>
          <EditProjectModal
            {...projectItem}
            onClose={() => setModalType(null)}
          />
        </Suspense>
      )}
    </>
  );
};
