import useSearch from '@/features/search/hooks/useSearch';
import { BaseInput } from '@/shared';

const SearchInput = () => {
  const { handleKeydown, handleChange } = useSearch();
  return (
    <>
      <BaseInput
        type="search"
        className="relative cursor-pointer text-black"
        onChange={(e) => {
          handleChange(e);
        }}
        onKeyDown={(e) => handleKeydown(e)}
      />
    </>
  );
};

export default SearchInput;
