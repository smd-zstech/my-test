import type { PropsWithChildren, ReactNode } from 'react';
import { cn } from '@/shared/utils/cn';

interface CardProps extends PropsWithChildren {
  title?: string;
  eyebrow?: string;
  action?: ReactNode;
  className?: string;
}

export function Card({ title, eyebrow, action, className, children }: CardProps) {
  return (
    <section className={cn('rounded-2xl border border-border bg-panel/90 p-5 shadow-panel', className)}>
      {(title || eyebrow || action) && (
        <header className="mb-4 flex items-start justify-between gap-4">
          <div>
            {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{eyebrow}</p> : null}
            {title ? <h3 className="mt-1 text-lg font-semibold text-foreground">{title}</h3> : null}
          </div>
          {action}
        </header>
      )}
      {children}
    </section>
  );
}
