import React from 'react';

interface LetterAvatarProps {
  name: string;
}

const getInitials = (name: string) => {
  const [firstName, lastName] = name.split(' ');
  if (firstName && lastName) {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  }

  return firstName.charAt(0).toUpperCase();
};

export const LetterAvatar = ({ name }: LetterAvatarProps) => {
  return (
    <div
      className="flex justify-center items-center w-12 h-12 rounded-full 
      text-white font-bold text-xl uppercase"
    >
      {getInitials(name)}
    </div>
  );
};
