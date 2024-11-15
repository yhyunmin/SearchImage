import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

export const BaseButton = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <Button className={className} {...props}>
      {children}
    </Button>
  );
};
