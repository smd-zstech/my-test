import type { ReactNode } from 'react';

interface Column<T> {
  header: string;
  cell: (row: T) => ReactNode;
}

interface SummaryTableProps<T> {
  columns: Column<T>[];
  rows: T[];
}

export function SummaryTable<T>({ columns, rows }: SummaryTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <table className="min-w-full divide-y divide-border text-left text-sm">
        <thead className="bg-slate-900/60 text-muted">
          <tr>
            {columns.map((column) => (
              <th key={column.header} className="px-4 py-3 font-medium">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-slate-950/40">
          {rows.map((row, index) => (
            <tr key={index} className="hover:bg-white/5">
              {columns.map((column) => (
                <td key={column.header} className="px-4 py-3 align-top">
                  {column.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
