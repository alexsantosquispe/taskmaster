import {
  PRIORITY_TYPES,
  STATUS_TYPES,
  type TaskType
} from '../../models/types';

export const TASKS: TaskType[] = [
  {
    id: '1',
    title: 'Research landing page trends.',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quidem rem quia exercitationem vitae doloremque voluptate optio quos fugit.',
    status: STATUS_TYPES.BACKLOG,
    createdAt: '2025-07-08T15:48:13-04:00',
    lastUpdate: '2025-07-09T15:48:13-04:00',
    priority: PRIORITY_TYPES.LOW,
    progress: 15
  },
  {
    id: '2',
    title: 'Create wireframes for the landing page.',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quidem rem quia exercitationem vitae doloremque voluptate optio quos fugit.',
    status: STATUS_TYPES.BACKLOG,
    createdAt: '2025-07-08T15:48:13-04:00',
    lastUpdate: '2025-07-10T15:48:13-04:00',
    priority: PRIORITY_TYPES.MEDIUM,
    progress: 50
  },
  {
    id: '3',
    title: 'Design the landing page.',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quidem rem quia exercitationem vitae doloremque voluptate optio quos fugit.',
    status: STATUS_TYPES.BACKLOG,
    createdAt: '2025-07-05T16:07:13-04:00',
    lastUpdate: '2025-07-09T07:48:13-04:00',
    priority: PRIORITY_TYPES.HIGH,
    progress: 67
  },
  {
    id: '4',
    title: 'Implement the landing page.',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quidem rem quia exercitationem vitae doloremque voluptate optio quos fugit.',
    status: STATUS_TYPES.BACKLOG,
    createdAt: '2025-07-06T18:08:13-04:00',
    lastUpdate: '2025-07-10T12:23:13-04:00',
    priority: PRIORITY_TYPES.LOW,
    progress: 100
  }
];
