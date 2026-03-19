import { Card } from '@/shared/components/ui/card';

export function NotificationCenter() {
  return (
    <Card title="Notifications" eyebrow="Shared Shell" className="h-full">
      <ul className="space-y-3 text-sm text-muted">
        <li>Tauri secure storage wiring is pending.</li>
        <li>Workspace-level toast and audit hooks are isolated by domain.</li>
      </ul>
    </Card>
  );
}
