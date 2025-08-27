import { ContextMenu } from '@/components/atoms/ContextMenu/ContextMenu';
import { Modal } from '@/components/atoms/Modal/Modal';
import { DeleteProjectModal } from '@/components/molecules/DeleteProjectModal/DeleteProjectModal';
import { PROJECT_MENU_OPTIONS } from '@/constants';
import { EllipsisVerticalIcon } from '@/icons';
import type { Option } from '@/models/types';
import type { ProjectDTO } from '@/services/apiTypes';
import { useState } from 'react';

export const EditProjectModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal
      title="Edit project"
      onClose={onClose}
      classNames={{ container: 'w-[40rem]' }}
    >
      <p>Edit project form goes here</p>
    </Modal>
  );
};

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
        <DeleteProjectModal
          projectId={projectItem.id}
          projectName={projectItem.name}
          onClose={() => setModalType(null)}
        />
      )}

      {modalType === 'edit' && (
        <EditProjectModal onClose={() => setModalType(null)} />
      )}
    </>
  );
};
