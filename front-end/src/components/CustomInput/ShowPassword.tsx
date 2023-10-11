import React, { ReactNode } from 'react';

interface ShowPasswordProps {
  children: ReactNode;
}
export default function ShowPassword({ children }: ShowPasswordProps) {
  return (
    <div className={`relative flex w-full items-center justify-end`}>{children}</div>
  );
}
