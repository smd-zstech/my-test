import type { JobRecord } from '@/shared/types/common';

export const jobRepository = {
  async list(): Promise<JobRecord[]> {
    return [];
  }
};
