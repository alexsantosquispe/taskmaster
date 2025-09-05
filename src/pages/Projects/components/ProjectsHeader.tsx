import { Suspense, lazy, useState } from 'react';

import { Button } from '@/components/atoms/Button/Button';
import SearchBar from '@/components/atoms/SearchBar/SearchBar';
import { CirclePlusIcon } from '@/icons';

const CreateProjectModal = lazy(
  () => import('@/components/molecules/CreateProjectModal/CreateProjectModal')
);

interface ProjectsHeaderProps {
  onSearchCallback: (value: string) => void;
}

export const ProjectsHeader = ({ onSearchCallback }: ProjectsHeaderProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <>
      <div className="flex w-full items-center justify-between py-1">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="flex gap-4">
          <SearchBar
            onSearchCallback={onSearchCallback}
            placeholder="Search by project name"
          />
          <Button
            label="New Project"
            onClick={openModal}
            icon={<CirclePlusIcon />}
            ariaLabel="Create new project button"
          />
        </div>
      </div>

      {isOpenModal && (
        <Suspense>
          <CreateProjectModal onClose={closeModal} />
        </Suspense>
      )}
    </>
  );
};
