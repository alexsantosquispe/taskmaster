import { DEFAULT_COLOR } from '@/constants';
import { NEW_PROJECT_FORM_NAMES } from './CreateProjectForm.types';
import { z } from 'zod';

export const OptionSchema = z.object({
  value: z.string(),
  label: z.string()
});

export const NewProjectFormSchema = z.object({
  [NEW_PROJECT_FORM_NAMES.NAME]: z
    .string()
    .min(1, { message: `Project's name is required` }),
  [NEW_PROJECT_FORM_NAMES.CODE]: z
    .string()
    .min(1, { message: 'Code is required' })
    .max(5, { message: 'Code must be at most 5 characters long' })
    .regex(/^[a-zA-Z]+$/, { message: 'Only letters are allowed' }),
  [NEW_PROJECT_FORM_NAMES.COLOR]: OptionSchema.optional(),
  [NEW_PROJECT_FORM_NAMES.DESCRIPTION]: z.string().optional()
});

export const NewProjectFormDefaultValues = {
  [NEW_PROJECT_FORM_NAMES.NAME]: '',
  [NEW_PROJECT_FORM_NAMES.CODE]: '',
  [NEW_PROJECT_FORM_NAMES.COLOR]: DEFAULT_COLOR,
  [NEW_PROJECT_FORM_NAMES.DESCRIPTION]: ''
};
