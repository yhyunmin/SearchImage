import { pageIdAtom, totalPageAtom } from '@/app';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

const usePagination = () => {
  const [query] = useAtom(pageIdAtom);
  const [currentPage, setPage] = useAtom(pageIdAtom);
  const [totalPage] = useAtom(totalPageAtom);
  const [pageItems, setPageItems] = useState<number[]>([]);

  const showItemsNumber = 3;

  const lastPage = () => {
    return Math.ceil(totalPage / 30);
  };

  useEffect(() => {
    //페이지네이션 아이템 렌더링 //
    const renderItems = () => {
      const lastNumber = lastPage();
      const startPage = Math.max(1, currentPage - Math.floor(showItemsNumber / 2));
      const endPage = Math.min(lastNumber, startPage + showItemsNumber - 1);
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };
    const pages = renderItems();
    console.log(pages);
    setPageItems(pages);
  }, [query, currentPage, totalPage]);
  return { pageItems, setPage, currentPage, lastPage };
};

export default usePagination;
