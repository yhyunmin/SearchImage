import { Input } from '@/shared/ui/input';
import { Search } from 'lucide-react';
import { ChangeEvent, KeyboardEvent } from 'react';

type Props = {
  className?: string;
  type?: string;
  value?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
};
const BaseInput = ({ className, type = 'search', ...props }: Props) => {
  return (
    <>
      <div className={className}>
        {type === 'search' && (
          <Search className="absolute left-3 top-1/2 w-5 -translate-y-1/2 transform text-zinc-800" />
        )}
        <Input
          className="rounded-xl border-zinc-200 bg-white py-7 pl-10 shadow-none placeholder:tracking-tighter placeholder:text-zinc-600"
          placeholder="원하는 이미지를 검색하세요."
          {...props}
        />
      </div>
    </>
  );
};

export default BaseInput;
