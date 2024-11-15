import { FolderOpen } from 'lucide-react';

export const FolderButton = () => {
  return (
    <>
      <button className="absolute right-4 top-4 rounded-xl bg-zinc-400 p-4 text-white opacity-75 shadow">
        <FolderOpen />
      </button>
    </>
  );
};
