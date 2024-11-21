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

  const showItemsNumber = 3;

  const lastPage = () => {
    return Math.ceil(totalPage / 30);
  };

  //페이지네이션 아이템 렌더링 //
  const renderItems = () => {
    const lastNumber = lastPage();
    const startPage = Math.max(1, currentPage - Math.floor(showItemsNumber / 2));
    const endPage = Math.min(lastNumber, startPage + showItemsNumber - 1);
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };

  // 경로 파라미터 page아톰에 넣기.
  // useEffect(() => {
  //   const queryParams = new URLSearchParams(location.search);
  //   const page = parseInt(queryParams.get('page') || '1');
  //   setPage(page);
  // }, [currentPage]);

  return (
    <>
      <Pagination>
        <PaginationContent>
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious
              // href={`?page=${Math.max(1, currentPage - 1)}`}
              onClick={(event) => {
                event.preventDefault();
                setPage(Math.max(1, currentPage - 1));
              }}
            />
          </PaginationItem>
          {renderItems().map((v) => (
            <>
              <PaginationItem key={v} className="cursor-pointer">
                <PaginationLink
                  //  href={`?page=${v}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setPage(v);
                  }}
                  isActive={v === currentPage}
                >
                  {v}
                </PaginationLink>
              </PaginationItem>
            </>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem className="cursor-pointer">
            <PaginationLink
              // href={`?page=${lastPage()}`}
              onClick={(event) => {
                event.preventDefault();
                setPage(lastPage());
              }}
            >
              {lastPage()}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem className="cursor-pointer">
            <PaginationNext
              // href={`?page=${Math.min(lastPage(), currentPage + 1)}`}
              onClick={(event) => {
                event.preventDefault();
                setPage(Math.min(lastPage(), currentPage + 1));
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default BasePagination;
