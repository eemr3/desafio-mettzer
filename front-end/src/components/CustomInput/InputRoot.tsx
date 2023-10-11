import React, { ReactNode } from 'react';

interface InputRootProps {
  children: ReactNode;
  className?: string;
}
export default function InputRoot({ children, className }: InputRootProps) {
  return <div className={`${className}`}>{children}</div>;
}
