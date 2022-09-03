import React, { useState } from 'react';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

export default function ButtonFavorite() {
  const [isFavorite, setIsFavorite] = useState(false);
  return isFavorite ? (
    <p className="text-center">
      <IoHeartSharp
        className="cursor-pointer"
        color="rgb(220 38 38)"
        size="2rem"
        onClick={() => setIsFavorite(!isFavorite)}
      />
    </p>
  ) : (
    <p className="text-center">
      <IoHeartOutline
        size="2rem"
        className="cursor-pointer"
        onClick={() => setIsFavorite(!isFavorite)}
      />
    </p>
  );
}
