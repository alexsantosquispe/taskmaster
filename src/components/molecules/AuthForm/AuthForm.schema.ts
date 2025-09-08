import { z } from 'zod';

export const AuthFormSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: 'Email is required'
    })
    .email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(8, { message: 'Password must be at least 8 characters long' })
});

export type AuthFormType = z.infer<typeof AuthFormSchema>;

export const AUTH_FORM_DEFAULT_VALUES: AuthFormType = {
  email: '',
  password: ''
};
