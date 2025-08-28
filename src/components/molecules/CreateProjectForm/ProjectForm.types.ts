import type { Option } from '@/models/types';

export const PROJECT_FORM_NAMES = {
  NAME: 'name',
  DESCRIPTION: 'description',
  COLOR: 'color',
  CODE: 'code'
} as const;

export interface ProjectFormValues {
  [PROJECT_FORM_NAMES.NAME]: string;
  [PROJECT_FORM_NAMES.CODE]: string;
  [PROJECT_FORM_NAMES.COLOR]?: Option;
  [PROJECT_FORM_NAMES.DESCRIPTION]?: string;
}
