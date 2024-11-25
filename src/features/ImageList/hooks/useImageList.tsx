import { pageIdAtom, queryAtom, totalPageAtom } from '@/app';
import { fetchImages } from '@/app/api';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

const useImageList = () => {
  const [query] = useAtom(queryAtom);
  const [pageId] = useAtom(pageIdAtom);
  const [_, setTotalPage] = useAtom(totalPageAtom);
  const [imageList, setImageList] = useState<any[]>([]);

  useEffect(() => {
    fetchImages(query, pageId).then((res) => {
      const data = res;
      setImageList(data.results);
      setTotalPage(data.total_pages);
    });
  }, [pageId, query]);
  return { imageList };
};

export default useImageList;
