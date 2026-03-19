import type { ZidentityAuthProfile } from '@/workspaces/zscaler/auth/types/zidentity-auth';

export const zidentityAuthService = {
  async listProfiles(): Promise<ZidentityAuthProfile[]> {
    return [
      {
        id: 'auth-1',
        name: 'Primary Zidentity API Client',
        clientId: 'zia-zpa-shared-client',
        clientSecretRef: 'app://zscaler/auth/auth-1/client-secret',
        enabledProducts: ['zia', 'zpa', 'client_connector'],
        status: 'verified'
      }
    ];
  }
};
