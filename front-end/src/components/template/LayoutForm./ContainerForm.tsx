import React, { ReactNode } from 'react';

interface ContainerFormProps {
  children: ReactNode;
}
export default function ContainerForm({ children }: ContainerFormProps) {
  return <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">{children}</div>;
}
