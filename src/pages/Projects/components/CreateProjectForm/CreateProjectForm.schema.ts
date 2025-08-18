import z, { ZodType } from 'zod';
import {
  NEW_PROJECT_FORM_NAMES,
  type NewProjectFormValues
} from './CreateProjectForm.types';

export const NewProjectFormSchema: ZodType<NewProjectFormValues> = z.object({
  [NEW_PROJECT_FORM_NAMES.NAME]: z
    .string()
    .min(1, { message: `Project's name is required` }),
  [NEW_PROJECT_FORM_NAMES.DESCRIPTION]: z
    .string()
    .min(1, { message: `Description is required` }),
  [NEW_PROJECT_FORM_NAMES.COLOR]: z
    .string()
    .min(1, { message: 'Color is required' }),
  [NEW_PROJECT_FORM_NAMES.CODE]: z
    .string()
    .min(1, { message: 'Code is required' })
});
