import SVGLogo from '@/shared/assets/logo.svg?react';
export const Logo = ({ className }: { className: string }) => {
  return (
    <>
      <div>
        <h1 id="logo" className={className}>
          <SVGLogo width={256} height={64} />
        </h1>
      </div>
    </>
  );
};
