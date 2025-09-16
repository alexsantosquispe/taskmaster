import { z } from 'zod';

export const ProfileFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: 'First name is required' })
    .optional(),
  lastName: z.string().min(1, { message: 'Last name is required' }).optional(),
  email: z.string().email({ message: 'Invalid email address' }).optional(),
  username: z.string().min(1, { message: 'Username is required' }).optional()
});

export type ProfileFormType = z.infer<typeof ProfileFormSchema>;

export const PROFILE_FORM_DEFAULT_VALUES: ProfileFormType = {
  firstName: '',
  lastName: '',
  email: '',
  username: ''
};
