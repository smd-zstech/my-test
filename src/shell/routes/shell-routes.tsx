import { ZscalerWorkspace } from '@/workspaces/zscaler/app/zscaler-workspace';
import { OktaWorkspace } from '@/workspaces/okta/app/okta-workspace';
import { useShellUiStore } from '@/shell/store/shell-ui.store';

export function ShellRouter() {
  const activeWorkspace = useShellUiStore((state) => state.activeWorkspace);

  if (activeWorkspace === 'okta') {
    return <OktaWorkspace />;
  }

  return <ZscalerWorkspace />;
}
