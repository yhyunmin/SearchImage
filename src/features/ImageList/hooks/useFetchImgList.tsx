import { ImageListAtom, getApiAtom, queryIdAtom } from '@/app';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

const useFetchImgList = () => {
  const [results, setResults] = useState<any[]>([]);
  const [data] = useAtom(ImageListAtom);
  const [query] = useAtom(queryIdAtom);
  const [getApi] = useAtom(getApiAtom);
  useEffect(() => {
    getApi;
    data;
    console.log(data, 'useFetchImgList');
    console.log(results, 'useFetchImgList');
  }, [getApi, data]);

  return { results };
};

export default useFetchImgList;
