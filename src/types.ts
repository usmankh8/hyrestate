export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  category: string;
  description: string;
  postedAt: string;
}

export interface Application {
  id: string;
  jobId: string;
  applicantName: string;
  status: 'Pending' | 'Interviewing' | 'Accepted' | 'Rejected';
  date: string;
}
