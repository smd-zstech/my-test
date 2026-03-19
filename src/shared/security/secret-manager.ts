export interface SecretReference {
  key: string;
  provider: 'os-secure-storage' | 'stronghold';
}

export const secretManager = {
  async save(_ref: SecretReference, _value: string) {
    return { status: 'CHECK REQUIRED' as const };
  },
  async read(_ref: SecretReference) {
    return null;
  }
};
