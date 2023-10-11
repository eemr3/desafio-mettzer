import React, { ReactNode } from 'react';

interface LayoutFormLoginSignUpProps {
  children: ReactNode;
}
export default function LayoutFormLoginSignUp({ children }: LayoutFormLoginSignUpProps) {
  return (
    <section className="h-screen max-w-[70rem] mx-auto">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {children}
        </div>
      </div>
    </section>
  );
}
