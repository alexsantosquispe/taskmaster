import { Button } from '@/components/atoms/Button/Button';
import { FrownIcon } from '@/icons';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-white text-neutral-600 dark:bg-black">
      <FrownIcon className="size-20" />
      <h1 className="text-center text-6xl leading-12 font-bold dark:text-white">
        Not Found
      </h1>
      <div className="flex flex-col items-center gap-4">
        <p className="text-center dark:text-neutral-200">
          Oops, this page doesn&apos;t exist or has been removed.
        </p>
        <Button
          ariaLabel="Back to home"
          label="Back to home"
          onClick={() => navigate('/')}
        />
      </div>
    </div>
  );
};

export default NotFound;
