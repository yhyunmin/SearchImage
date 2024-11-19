import { apiPageAtom } from '@/app';
import { searchValueAtom } from '@/app/store';
import { useAtom } from 'jotai';
import { useCallback, useState } from 'react';

const usePagination = () => {
  // page 정보가져오기 (totalPages);
  // totalPage array 만들기
  // 페이지네이션 아이템 렌더링 개수
  // currentPage, handlePage제작
  const [pages, setPages] = useAtom(apiPageAtom);

  return {};
};

export default usePagination;
