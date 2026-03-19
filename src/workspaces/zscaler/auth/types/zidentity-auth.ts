export interface ZidentityAuthProfile {
  id: string;
  name: string;
  clientId: string;
  clientSecretRef: string;
  enabledProducts: Array<'zia' | 'zpa' | 'client_connector'>;
  status: 'verified' | 'pending' | 'error';
}
