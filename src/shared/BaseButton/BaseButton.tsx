import { Button } from '@/shared/ui/button';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const BaseButton = ({
  children,
  className,
  href,
  ...props
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) => {
  const navigate = useNavigate();

  const handleClick = (href: string) => {
    navigate(href);
  };
  return (
    <Button className={className} onClick={href ? () => handleClick(href) : undefined} {...props}>
      {children}
    </Button>
  );
};
export default BaseButton;
