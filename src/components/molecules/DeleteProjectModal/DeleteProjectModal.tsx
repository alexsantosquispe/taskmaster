import { Button } from '@/components/atoms/Button/Button';
import { Modal } from '@/components/atoms/Modal/Modal';
import cn from 'clsx';
import { useDeleteProject } from './useDeleteProject';

interface DeleteProjectModalProps {
  projectId: string;
  projectName: string;
  onClose: () => void;
}

const DeleteProjectModal = ({
  projectId,
  projectName,
  onClose
}: DeleteProjectModalProps) => {
  const { onDeleteProject, isLoading } = useDeleteProject({
    projectId,
    projectName,
    onClose
  });

  return (
    <Modal
      onClose={onClose}
      classNames={{
        container: 'md:w-[10rem]',
        header: 'justify-end py-2'
      }}
    >
      <div className="flex flex-col gap-4 px-2 pb-2">
        <h3 className="text-center text-base font-semibold">
          Are you sure you want to delete this project?
        </h3>
        <p className="rounded-lg border border-rose-300 bg-rose-50 px-2 py-3 text-center leading-6 text-neutral-600 dark:border-rose-500/20 dark:bg-rose-700/10 dark:text-white/80">
          The project
          <strong className="text-rose-600 dark:text-rose-500">
            {` ${projectName} `}
          </strong>
          will be deleted. So, you will not be able to recover this project.
        </p>

        <div className="flex flex-1 items-center justify-end gap-4">
          <Button
            label="Cancel"
            ariaLabel="Cancel delete project"
            onClick={onClose}
            className="hover:text-primary dark:hover:text-white"
            isSecondary={true}
          />
          <Button
            label="Delete project"
            ariaLabel="Delete project"
            className={cn({
              'bg-rose-700 hover:bg-rose-600 dark:bg-rose-800 dark:hover:bg-rose-700':
                !isLoading
            })}
            onClick={onDeleteProject}
            isLoading={isLoading}
          />
        </div>
      </div>
    </Modal>
  );
};

export default DeleteProjectModal;
