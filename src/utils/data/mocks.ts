import {
  PRIORITY_TYPES,
  STATUS_TYPES,
  type TaskType
} from '../../models/types';

export const BACKLOG_TASKS: TaskType[] = [
  {
    id: '1',
    title: 'Set up analytics tools',
    description:
      'Install and configure Google Analytics and Hotjar to monitor user behavior and traffic.',
    status: STATUS_TYPES.BACKLOG,
    createdAt: '2025-07-01T10:24:00-04:00',
    lastUpdate: '2025-07-05T14:13:00-04:00',
    priority: PRIORITY_TYPES.MEDIUM,
    progress: 0
  },
  {
    id: '2',
    title: 'Gather user feedback on onboarding',
    description:
      'Collect and analyze user feedback from early access users about the onboarding experience.',
    status: STATUS_TYPES.BACKLOG,
    createdAt: '2025-07-02T11:30:00-04:00',
    lastUpdate: '2025-07-06T09:00:00-04:00',
    priority: PRIORITY_TYPES.HIGH,
    progress: 0
  },
  {
    id: '18',
    title: 'Write project README',
    description:
      'Added complete project documentation including setup, scripts, and folder structure.',
    status: STATUS_TYPES.DONE,
    createdAt: '2025-07-03T13:40:00-04:00',
    lastUpdate: '2025-07-06T10:00:00-04:00',
    priority: PRIORITY_TYPES.LOW,
    progress: 100
  }
];

export const ON_HOLD_TASKS: TaskType[] = [
  {
    id: '7',
    title: 'Finalize pricing model options',
    description:
      'Pricing structure needs stakeholder review before publishing. Waiting for finance team input.',
    status: STATUS_TYPES.ON_HOLD,
    createdAt: '2025-07-03T10:00:00-04:00',
    lastUpdate: '2025-07-09T11:45:00-04:00',
    priority: PRIORITY_TYPES.LOW,
    progress: 75
  }
];

export const IN_PROGRESS_TASKS: TaskType[] = [
  {
    id: '12',
    title: 'Implement authentication flow',
    description:
      'OAuth integration is partially done; currently wiring up token refresh and user session handling.',
    status: STATUS_TYPES.IN_PROGRESS,
    createdAt: '2025-07-06T09:30:00-04:00',
    lastUpdate: '2025-07-10T10:45:00-04:00',
    priority: PRIORITY_TYPES.HIGH,
    progress: 45
  },
  {
    id: '13',
    title: 'Integrate Supabase for data storage',
    description:
      'Connection established. Working on CRUD operations and testing permissions for different roles.',
    status: STATUS_TYPES.IN_PROGRESS,
    createdAt: '2025-07-08T14:00:00-04:00',
    lastUpdate: '2025-07-10T09:30:00-04:00',
    priority: PRIORITY_TYPES.HIGH,
    progress: 80
  }
];

export const REVIEW_TASKS: TaskType[] = [
  {
    id: '8',
    title: 'Update brand guidelines',
    description:
      'Rebranding paused until feedback from the design lead is received.',
    status: STATUS_TYPES.REVIEW,
    createdAt: '2025-07-02T14:20:00-04:00',
    lastUpdate: '2025-07-06T17:00:00-04:00',
    priority: PRIORITY_TYPES.MEDIUM,
    progress: 100
  },
  {
    id: '9',
    title: 'Legal review for terms of service',
    description:
      'Sent draft to legal team. Awaiting confirmation before moving forward.',
    status: STATUS_TYPES.REVIEW,
    createdAt: '2025-07-05T13:10:00-04:00',
    lastUpdate: '2025-07-08T12:30:00-04:00',
    priority: PRIORITY_TYPES.HIGH,
    progress: 100
  },
  {
    id: '19',
    title: 'Create logo and favicon',
    description:
      'Exported multiple sizes and formats for the logo. Favicon added to HTML head.',
    status: STATUS_TYPES.DONE,
    createdAt: '2025-07-04T08:00:00-04:00',
    lastUpdate: '2025-07-07T09:20:00-04:00',
    priority: PRIORITY_TYPES.MEDIUM,
    progress: 100
  }
];

export const DONE_TASKS: TaskType[] = [
  {
    id: '15',
    title: 'Deploy staging environment',
    description:
      'Staging environment successfully deployed and tested with mock data.',
    status: STATUS_TYPES.DONE,
    createdAt: '2025-06-30T11:00:00-04:00',
    lastUpdate: '2025-07-03T15:30:00-04:00',
    priority: PRIORITY_TYPES.HIGH,
    progress: 100
  },
  {
    id: '16',
    title: 'Fix navbar responsiveness',
    description:
      'Navbar layout now works correctly across all screen sizes and breakpoints.',
    status: STATUS_TYPES.DONE,
    createdAt: '2025-07-01T10:00:00-04:00',
    lastUpdate: '2025-07-04T12:15:00-04:00',
    priority: PRIORITY_TYPES.MEDIUM,
    progress: 100
  },
  {
    id: '17',
    title: 'Set up CI/CD pipeline',
    description:
      'GitHub Actions configured to run tests and deploy to Vercel on push to main.',
    status: STATUS_TYPES.DONE,
    createdAt: '2025-07-02T09:30:00-04:00',
    lastUpdate: '2025-07-05T14:45:00-04:00',
    priority: PRIORITY_TYPES.HIGH,
    progress: 100
  },

  {
    id: '20',
    title: 'Test form validation logic',
    description:
      'Test cases written and validated for all form fields using React Hook Form.',
    status: STATUS_TYPES.DONE,
    createdAt: '2025-07-05T10:45:00-04:00',
    lastUpdate: '2025-07-08T11:30:00-04:00',
    priority: PRIORITY_TYPES.HIGH,
    progress: 100
  }
];
