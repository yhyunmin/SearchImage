import { BaseButton } from '@/shared';
import { Divider } from '@/shared';
import { Logo, Profile } from '@/widget/Header/ui';

import { Album } from 'lucide-react';
export const Header = () => {
  return (
    <>
      <nav className="flex w-full items-center justify-between border-b border-b-zinc-200 p-4">
        <Logo className="" />
        <div className="flex h-full items-center gap-4">
          <BaseButton className="rounded bg-zinc-100 font-bold shadow-none">
            <Album className="h-full w-full" />
            <span>북 마크</span>
          </BaseButton>
          <Divider />
          <Profile />
        </div>
      </nav>
    </>
  );
};
