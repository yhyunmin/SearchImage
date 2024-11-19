import { FolderOpen } from 'lucide-react';

export const FolderButton = () => {
  return (
    <>
      <button className="absolute right-3 top-3 flex h-11 w-11 transform items-center justify-center rounded-xl bg-zinc-600 p-3 text-white opacity-75 shadow hover:bg-zinc-800">
        <FolderOpen size={40} />
      </button>
    </>
  );
};
