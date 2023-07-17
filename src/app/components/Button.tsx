'use client'

interface ButtonProps {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
      py-2.5 px-4
      rounded-md
      disabled:opacity-70
      disabled:cursor-not-allowed
      hover:opacity-90
      transition
      w-full
      min-w-fit font-bold
      ${outline ? 'bg-transparent' : 'bg-purple-500'}
      ${outline && 'border-[1px]'}
      ${outline ? 'border-purple-500' : 'border-purple-500'}
      ${outline ? 'text-neutral-900' : 'text-neutral-50'}
    `}>
      {label}
    </button>
  );
}

export default Button;