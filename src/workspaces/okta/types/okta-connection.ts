export interface OktaConnectionProfile {
  id: string;
  orgUrl: string;
  authMode: 'oauth_service_app' | 'api_token';
  scopes: string[];
}
