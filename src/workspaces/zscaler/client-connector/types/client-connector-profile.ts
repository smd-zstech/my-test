export interface ClientConnectorProfileSummary {
  id: string;
  name: string;
  platform: string;
  mode: 'oneapi_zidentity' | 'portal_public_api';
}
