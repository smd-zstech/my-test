import type { OktaConnectionProfile } from '@/workspaces/okta/types/okta-connection';

export const oktaConnectionService = {
  async listProfiles(): Promise<OktaConnectionProfile[]> {
    return [
      {
        id: 'okta-1',
        orgUrl: 'https://example.okta.com',
        authMode: 'oauth_service_app',
        scopes: ['okta.users.read', 'okta.groups.read', 'okta.apps.read']
      }
    ];
  }
};
