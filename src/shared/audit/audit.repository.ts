import type { ActivityRecord } from '@/shared/types/common';

export const auditRepository = {
  async list(): Promise<ActivityRecord[]> {
    return [];
  }
};
