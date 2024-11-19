import SVGProfile from '@/shared/assets/profile.svg?react';
export const Profile = () => {
  return (
    <>
      <div className="flex items-center gap-2 font-medium">
        <div className="overflow-hidden rounded-full bg-zinc-100">
          <SVGProfile width={48} height={48} />
        </div>
        <p>Hyunmin Yi</p>
        <p>|</p>
        <p>Do it Vue.js</p>
      </div>
    </>
  );
};
