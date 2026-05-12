interface CartBadgeProps {
  count: number;
  variant?: 'mobile' | 'desktop';
}

export const CartBadge = ({ count, variant = 'mobile' }: CartBadgeProps) => {
  if (count === 0) return null;

  const isDesktop = variant === 'desktop';

  return (
    <span
      className={`absolute flex items-center justify-center rounded-full bg-pink100 font-fredoka font-semibold text-white ${
        isDesktop
          ? '-right-3 -top-3 h-5 w-5 text-xs'
          : '-right-2 -top-2 h-6 w-6 text-sm'
      }`}
    >
      {count <= 9 ? count : ''}
    </span>
  );
};