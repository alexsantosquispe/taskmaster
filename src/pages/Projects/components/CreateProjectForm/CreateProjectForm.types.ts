import type { Option } from '@/models/types';

export const NEW_PROJECT_FORM_NAMES = {
  NAME: 'name',
  DESCRIPTION: 'description',
  COLOR: 'color',
  CODE: 'code'
} as const;

export interface NewProjectFormValues {
  [NEW_PROJECT_FORM_NAMES.NAME]: string;
  [NEW_PROJECT_FORM_NAMES.CODE]: string;
  [NEW_PROJECT_FORM_NAMES.COLOR]?: Option;
  [NEW_PROJECT_FORM_NAMES.DESCRIPTION]?: string;
}
