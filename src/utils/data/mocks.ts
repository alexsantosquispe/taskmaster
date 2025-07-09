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
    createdAt: '2025-07-09T15:48:13-04:00',
    lastUpdate: '2025-07-09T15:48:13-04:00',
    priority: PRIORITY_TYPES.LOW,
    progress: 0
  },
  {
    id: '2',
    title: 'Create wireframes for the landing page.',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quidem rem quia exercitationem vitae doloremque voluptate optio quos fugit.',
    status: STATUS_TYPES.BACKLOG,
    createdAt: '2025-07-09T15:48:13-04:00',
    lastUpdate: '2025-07-09T15:48:13-04:00',
    priority: PRIORITY_TYPES.MEDIUM,
    progress: 0
  },
  {
    id: '3',
    title: 'Design the landing page.',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quidem rem quia exercitationem vitae doloremque voluptate optio quos fugit.',
    status: STATUS_TYPES.BACKLOG,
    createdAt: '2025-07-09T15:48:13-04:00',
    lastUpdate: '2025-07-09T15:48:13-04:00',
    priority: PRIORITY_TYPES.HIGH,
    progress: 0
  },
  {
    id: '4',
    title: 'Implement the landing page.',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint quidem rem quia exercitationem vitae doloremque voluptate optio quos fugit.',
    status: STATUS_TYPES.BACKLOG,
    createdAt: '2025-07-09T15:48:13-04:00',
    lastUpdate: '2025-07-09T15:48:13-04:00',
    priority: PRIORITY_TYPES.LOW,
    progress: 0
  }
];
