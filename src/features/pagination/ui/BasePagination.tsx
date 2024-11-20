import { pageIdAtom, totalPageAtom } from '@/app';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/pagination';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

const BasePagination = () => {
  const [currentPage, setPage] = useAtom(pageIdAtom);
  const [totalPage] = useAtom(totalPageAtom);

  // 페이지네이션
  // 1. 각 totalPage 30개씩 분할(separated)하여 paginationItem 렌더링
  const renderItems = () => {
    const showItemNumber = 3;
    const itemNumber = Math.ceil(totalPage / 30);
    return Array.from({ length: itemNumber }, (_, i) => i + 1);
  };
  useEffect(() => {
    console.log('test', renderItems());
  });
  // 2. currentPage는 item 가운데
  // 3. item마다 setItem currentPage기준으로 바인딩
  // 4. prev / next setItem + 1 하기
  // 5. separted 마지막 숫자 렌더링하기.

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" onClick={() => setPage(currentPage - 1)} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" onClick={() => setPage(currentPage + 1)} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default BasePagination;
