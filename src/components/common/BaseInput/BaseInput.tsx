import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export const BaseInput = ({ className, type }: { className: string; type: string }) => {
  return (
    <>
      <div className={className}>
        {type === 'search' && (
          <Search className="absolute left-3 top-1/2 w-5 -translate-y-1/2 transform text-zinc-800" />
        )}
        <Input
          className="rounded-xl border-zinc-200 bg-white py-7 pl-10 shadow-none placeholder:tracking-tighter placeholder:text-zinc-600"
          placeholder="원하는 이미지를 검색하세요."
        />
      </div>
    </>
  );
};
