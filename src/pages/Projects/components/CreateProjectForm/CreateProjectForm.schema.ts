import { DEFAULT_COLOR } from '@/constants';
import { z } from 'zod';
import { NEW_PROJECT_FORM_NAMES } from './CreateProjectForm.types';

export const NewProjectFormSchema = z.object({
  [NEW_PROJECT_FORM_NAMES.NAME]: z
    .string()
    .min(1, { message: `Project's name is required` }),
  [NEW_PROJECT_FORM_NAMES.CODE]: z
    .string()
    .min(1, { message: 'Code is required' })
    .regex(/^[a-zA-Z]+$/, { message: 'Only letters are allowed' }),
  [NEW_PROJECT_FORM_NAMES.COLOR]: z
    .object({
      value: z.string(),
      label: z.string()
    })
    .optional(),
  [NEW_PROJECT_FORM_NAMES.DESCRIPTION]: z.string().optional()
});

export const NewProjectFormDefaultValues = {
  [NEW_PROJECT_FORM_NAMES.NAME]: '',
  [NEW_PROJECT_FORM_NAMES.CODE]: '',
  [NEW_PROJECT_FORM_NAMES.COLOR]: DEFAULT_COLOR,
  [NEW_PROJECT_FORM_NAMES.DESCRIPTION]: ''
};
