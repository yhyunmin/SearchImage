import { searchValueAtom } from '@/app/store';
import { fetchImages } from './services';
import { useAtom } from 'jotai';
import { KeyboardEvent, useEffect, useState } from 'react';

const useSearch = () => {
  const [value, setValue] = useAtom(searchValueAtom);
  const [results, setResults] = useState<any[]>([]);

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setValue(e.key);
      console.log('baseInput의 handleKeyDown 작동완료');
    }
  };
  useEffect(() => {
    // early return
    if (!value) {
      setValue('seoul');
      return;
    }
    //
    const fetchResults = async () => {
      try {
        const res = await fetchImages(value);
        setResults(res);
      } catch (e) {
        console.log(e, 'useSearch');
      }
    };
    fetchResults();
  }, [value]);

  return { value, setValue, results, handleKeydown };
};

export default useSearch;
