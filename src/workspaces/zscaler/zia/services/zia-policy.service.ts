import type { ZiaPolicySummary } from '@/workspaces/zscaler/zia/types/zia-policy';

export const ziaPolicyService = {
  async listPolicies(): Promise<ZiaPolicySummary[]> {
    return [
      { id: 'zia-1', name: 'Internet Access Policy', status: 'Draft review', scope: 'All users' }
    ];
  }
};
