import type { ClientConnectorProfileSummary } from '@/workspaces/zscaler/client-connector/types/client-connector-profile';

export const clientConnectorProfileService = {
  async listProfiles(): Promise<ClientConnectorProfileSummary[]> {
    return [
      { id: 'cc-1', name: 'Windows App Profile', platform: 'Windows', mode: 'portal_public_api' }
    ];
  }
};
