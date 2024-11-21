import SVGLogo from '@/shared/assets/logo.svg?react';
import { Link } from 'react-router-dom';
export const Logo = ({ className, href }: { className: string; href: string }) => {
  return (
    <>
      <div>
        <Link to={href}>
          <h1 id="logo" className={className}>
            <SVGLogo width={256} height={64} />
          </h1>
        </Link>
      </div>
    </>
  );
};
