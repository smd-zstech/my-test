import type { ZpaPolicySummary } from '@/workspaces/zscaler/zpa/types/zpa-policy';

export const zpaPolicyService = {
  async listPolicies(): Promise<ZpaPolicySummary[]> {
    return [
      { id: 'zpa-1', name: 'Privileged Access Policy', action: 'Allow', segmentGroup: 'Critical Apps' }
    ];
  }
};
