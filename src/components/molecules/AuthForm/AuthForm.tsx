import { Button } from '@/components/atoms/Button/Button';
import { InputField } from '@/components/atoms/InputField/InputField';
import { TextLink } from '@/components/atoms/TextLink/TextLink';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type Control, type FieldValues } from 'react-hook-form';
import {
  AUTH_FORM_DEFAULT_VALUES,
  AuthFormSchema,
  type AuthFormType
} from './AuthForm.schema';

interface AuthFormProps {
  submitButtonLabel: string;
  onSubmitHandler: (formData: AuthFormType) => void;
  hasTermsAndPrivacyLegend?: boolean;
  hasForgotPassword?: boolean;
}

export const AuthForm = ({
  submitButtonLabel,
  onSubmitHandler,
  hasTermsAndPrivacyLegend = false,
  hasForgotPassword = false
}: AuthFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthFormType>({
    resolver: zodResolver(AuthFormSchema),
    defaultValues: AUTH_FORM_DEFAULT_VALUES
  });

  const onSubmit = (formData: AuthFormType) => onSubmitHandler(formData);

  return (
    <form
      className="flex flex-1 flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField
        label="Email address"
        name="email"
        control={control as unknown as Control<FieldValues>}
        placeholder="Enter your email address"
        errorMessage={errors.email?.message}
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        control={control as unknown as Control<FieldValues>}
        placeholder="Enter your password"
        errorMessage={errors.password?.message}
      />

      {hasTermsAndPrivacyLegend && (
        <p className="text-xs text-neutral-500 dark:text-neutral-300">
          By creating your account, you agree to our&nbsp;
          <TextLink to="/terms">Terms of Service</TextLink> and&nbsp;
          <TextLink to="/privacy">Privacy Policy</TextLink>.
        </p>
      )}

      {hasForgotPassword && (
        <TextLink to="/reset-password" className="-mt-2 text-end text-sm">
          Forgot password?
        </TextLink>
      )}

      <Button
        type="submit"
        label={submitButtonLabel}
        ariaLabel={`${submitButtonLabel} button`}
        className="w-full"
      />
    </form>
  );
};
