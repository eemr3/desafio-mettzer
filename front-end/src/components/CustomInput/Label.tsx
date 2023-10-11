interface LabelProps {
  text: string;
  className?: string;
  htmlFor: string;
}

export function Label({ text, htmlFor, className }: LabelProps) {
  return (
    <label htmlFor={htmlFor} className={`${className}`}>
      {text}
    </label>
  );
}
