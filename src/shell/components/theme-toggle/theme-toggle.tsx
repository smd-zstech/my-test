interface ThemeToggleProps {
  theme: 'dark' | 'light';
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      className="rounded-xl border border-border px-3 py-2 text-sm text-muted hover:text-foreground"
      onClick={onToggle}
    >
      Theme: {theme}
    </button>
  );
}
