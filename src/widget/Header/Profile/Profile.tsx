import SVGProfile from '@/assets/profile.svg?react';
export const Profile = () => {
  return (
    <>
      <div className='flex items-center gap-2 font-medium'>
        <div className='rounded-full bg-zinc-100 overflow-hidden'>
          <SVGProfile width={48} height={48} />
        </div>
        <p>Hyunmin Yi</p>
        <p>|</p>
        <p>Do it Vue.js</p>
      </div>
    </>
  );
};
