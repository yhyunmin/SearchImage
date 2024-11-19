import { Button } from '@/shared/ui/button';
import { ReactNode } from 'react';

const BaseButton = ({ children, className, ...props }: { children: ReactNode; className?: string }) => {
  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  );
};

export default BaseButton;
