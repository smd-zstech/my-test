import { QueryClientProvider } from '@tanstack/react-query';
import { ShellRouter } from '@/shell/routes/shell-routes';
import { queryClient } from '@/app/providers/query-client';

export function AppBootstrap() {
  return (
    <QueryClientProvider client={queryClient}>
      <ShellRouter />
    </QueryClientProvider>
  );
}
