import { totalPageAtom } from '@/app';
import { useAtom } from 'jotai';
import { useState } from 'react';

const usePagination = () => {
  const [data] = useAtom(totalPageAtom);
  const [results, setResults] = useState();

  return {};
};

export default usePagination;
