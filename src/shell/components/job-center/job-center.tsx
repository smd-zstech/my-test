import type { JobRecord } from '@/shared/types/common';
import { Card } from '@/shared/components/ui/card';

interface JobCenterProps {
  jobs: JobRecord[];
}

export function JobCenter({ jobs }: JobCenterProps) {
  return (
    <Card title="Job Center" eyebrow="Shared Shell">
      <div className="space-y-3">
        {jobs.map((job) => (
          <div key={job.id} className="rounded-2xl border border-border bg-slate-950/40 p-4 text-sm">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium">{job.title}</p>
              <span className="text-xs uppercase tracking-[0.2em] text-muted">{job.state}</span>
            </div>
            <p className="mt-2 text-muted">{job.summary}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
