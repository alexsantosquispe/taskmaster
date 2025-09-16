import { useDebounce } from '@/hooks/useDebounce';
import { INPUT_FIELD_STYLES } from '@/styles';
import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

interface SearchBarProps {
  onSearchCallback: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar = ({
  onSearchCallback,
  placeholder = 'Search by keyword',
  className
}: SearchBarProps) => {
  const onSearch = useDebounce(onSearchCallback);

  return (
    <div className="relative flex w-fit">
      <input
        type="search"
        placeholder={placeholder}
        onChange={(e) => onSearch(e.target.value)}
        className={twMerge(INPUT_FIELD_STYLES, 'md:min-w-[16rem]', className)}
      />
    </div>
  );
};

export default memo(SearchBar);
