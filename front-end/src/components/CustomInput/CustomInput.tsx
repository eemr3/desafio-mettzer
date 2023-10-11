import React, { InputHTMLAttributes } from 'react';
interface CustomImputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
export default function CustomInput({ className, ...rest }: CustomImputProps) {
  return <input {...rest} className={`${className}`} />;
}
