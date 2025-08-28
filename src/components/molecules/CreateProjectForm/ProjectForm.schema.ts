import { DEFAULT_COLOR } from '@/constants';
import { PROJECT_FORM_NAMES } from './ProjectForm.types';
import { z } from 'zod';

export const OptionSchema = z.object({
  value: z.string(),
  label: z.string()
});

export const ProjectFormSchema = z.object({
  [PROJECT_FORM_NAMES.NAME]: z
    .string()
    .min(1, { message: `Project's name is required` }),
  [PROJECT_FORM_NAMES.CODE]: z
    .string()
    .min(1, { message: 'Code is required' })
    .max(5, { message: 'Code must be at most 5 characters long' })
    .regex(/^[a-zA-Z]+$/, { message: 'Only letters are allowed' }),
  [PROJECT_FORM_NAMES.COLOR]: OptionSchema.optional(),
  [PROJECT_FORM_NAMES.DESCRIPTION]: z.string().optional()
});

export const PROJECT_FORM_DEFAULT_VALUES = {
  [PROJECT_FORM_NAMES.NAME]: '',
  [PROJECT_FORM_NAMES.CODE]: '',
  [PROJECT_FORM_NAMES.COLOR]: DEFAULT_COLOR,
  [PROJECT_FORM_NAMES.DESCRIPTION]: ''
};
