import { ChevronRight } from 'lucide-react';

interface SectionTitleProps {
  title: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  viewAllHref?: string;
}

export default function SectionTitle({ title, icon, variant = 'primary', viewAllHref }: SectionTitleProps) {
  const colorMap = {
    primary: {
      bg: 'bg-[var(--primary)]',
      text: 'text-white',
      border: 'border-[var(--primary)]',
    },
    secondary: {
      bg: 'bg-[var(--secondary)]',
      text: 'text-white',
      border: 'border-[var(--secondary)]',
    },
    accent: {
      bg: 'bg-[var(--accent)]',
      text: 'text-[var(--gray-800)]',
      border: 'border-[var(--accent)]',
    },
  };

  const colors = colorMap[variant];

  return (
    <div className={`flex items-center justify-between border-b-2 ${colors.border} mb-4`}>
      <div className="flex items-center">
        <div className={`${colors.bg} ${colors.text} px-4 py-2 text-sm font-bold uppercase tracking-wider flex items-center gap-2`}>
          {icon && <span>{icon}</span>}
          {title}
        </div>
        <div
          className={`w-0 h-0 border-t-[18px] border-b-[18px] border-l-[12px] border-t-transparent border-b-transparent`}
          style={{ borderLeftColor: variant === 'primary' ? 'var(--primary)' : variant === 'secondary' ? 'var(--secondary)' : 'var(--accent)' }}
        />
      </div>
      {viewAllHref && (
        <a href={viewAllHref} className="text-xs font-semibold text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors flex items-center gap-1 pb-1">
          Xem tất cả
          <ChevronRight className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  );
}
