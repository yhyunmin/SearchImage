import usePagination from '@/features/pagination/hooks/usePagination';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/pagination';

const BasePagination = () => {
  const { currentPage, lastPage, pageItems, setPage } = usePagination();
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
          {pageItems.map((v) => (
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
