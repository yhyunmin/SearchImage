import { BaseButton } from '@/components/common/BaseButton';
import { Divider } from '@/components/common/Divider';

import { Logo } from '@/widget/Header/Logo';
import { Profile } from '@/widget/Header/Profile';
import { Album } from 'lucide-react';
export const Header = () => {
  return (
    <>
      <nav className='flex justify-between items-center w-full border-b border-b-zinc-200 p-4'>
        <Logo className='' />
        <div className='h-full flex items-center gap-4 '>
          <BaseButton className='shadow-none bg-zinc-100 rounded font-bold'>
            <Album className='h-full w-full' />
            <span>북 마크 </span>
          </BaseButton>
          <Divider />
          <Profile />
        </div>
      </nav>
    </>
  );
};
