import { queryIdAtom } from '@/app';
import { useAtom } from 'jotai';
import { ChangeEvent, KeyboardEvent, useState } from 'react';

const useSearch = () => {
  const [_, setQuery] = useAtom(queryIdAtom);
  const [value, setValue] = useState('');

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // console.log('baseInput의 handleKeyDown 작동완료');
      setQuery(value);
      console.log('searchValueAtom 상태:', value);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, setValue, handleKeydown, handleChange };
};

export default useSearch;
