import { fetchApiAtom } from '@/app';
import { searchValueAtom } from '@/app/store';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const useFetchImgList = () => {
  const [value] = useAtom(searchValueAtom);
  const [, fetchApi] = useAtom(fetchApiAtom);

  useEffect(() => {
    console.log('value 변경으로 인한 useFetchImgList 호출', value);
    fetchApi();
  }, [value]);

  return { fetchApi, value };
};

export default useFetchImgList;
