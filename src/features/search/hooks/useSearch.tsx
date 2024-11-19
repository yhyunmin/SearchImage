import { searchValueAtom } from '@/app/store';
import { useAtom } from 'jotai';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';

const useSearch = () => {
  const [value, setValue] = useAtom(searchValueAtom);
  const [query, setQuery] = useState('');

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // console.log('baseInput의 handleKeyDown 작동완료');
      setValue(query);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    console.log('searchValueAtom 상태:', value);
  }, [value]);

  return { value, setValue, handleKeydown, handleChange };
};

export default useSearch;
