import type { ZscalerProductArea } from '@/workspaces/zscaler/shared/types/zscaler';
import { cn } from '@/shared/utils/cn';

const products: Array<{ id: ZscalerProductArea; label: string }> = [
  { id: 'zia', label: 'ZIA Console' },
  { id: 'zpa', label: 'ZPA Console' },
  { id: 'client_connector', label: 'Client Connector Console' }
];

interface ZscalerProductSwitcherProps {
  value: ZscalerProductArea;
  onChange: (value: ZscalerProductArea) => void;
}

export function ZscalerProductSwitcher({ value, onChange }: ZscalerProductSwitcherProps) {
  return (
    <div className="inline-flex rounded-2xl border border-border bg-slate-950/60 p-1">
      {products.map((product) => (
        <button
          key={product.id}
          type="button"
          onClick={() => onChange(product.id)}
          className={cn(
            'rounded-xl px-4 py-2 text-sm font-medium transition',
            value === product.id ? 'bg-white/10 text-white' : 'text-muted hover:text-foreground'
          )}
        >
          {product.label}
        </button>
      ))}
    </div>
  );
}
