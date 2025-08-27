import { ContextMenu } from '@/components/atoms/ContextMenu/ContextMenu';
import { Modal } from '@/components/atoms/Modal/Modal';
import { PROJECT_MENU_OPTIONS } from '@/constants';
import { EllipsisVerticalIcon } from '@/icons';
import type { Option } from '@/models/types';
import { useState } from 'react';

export const DeleteProjectModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <Modal
      title="Delete project"
      onClose={onClose}
      classNames={{ container: 'w-[40rem]' }}
    >
      <p>Are you sure you want to delete this project?</p>
    </Modal>
  );
};

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

export const ProjectCardContextMenu = () => {
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
          contentWrapper: 'min-w-[6rem]'
        }}
      />

      {modalType === 'delete' && (
        <DeleteProjectModal onClose={() => setModalType(null)} />
      )}
      {modalType === 'edit' && (
        <EditProjectModal onClose={() => setModalType(null)} />
      )}
    </>
  );
};
