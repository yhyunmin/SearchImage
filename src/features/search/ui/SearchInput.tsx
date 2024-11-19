import useSearch from '@/features/search/ui/model/useSearch';
import { BaseInput } from '@/shared';

// TODO  onChange가 아닌 enter 눌러서 setValue 넘기기

const SearchInput = () => {
  const { handleKeydown } = useSearch();
  return (
    <>
      <BaseInput type="search" className="relative cursor-pointer text-black" onKeyDown={(e) => handleKeydown(e)} />
    </>
  );
};

export default SearchInput;
