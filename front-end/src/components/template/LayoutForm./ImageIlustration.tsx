import Image from 'next/image';
import React from 'react';

export default function ImageIlustration({ image }: { image: string }) {
  return (
    <div
      className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 
      xl:w-6/12"
    >
      <Image
        className="w-full"
        src={image}
        width={0}
        height={0}
        alt="Imagem da tela de login"
        priority
      />
    </div>
  );
}
