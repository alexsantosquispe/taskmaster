import { Button } from '@/components/atoms/Button/Button';
import { InputField } from '@/components/atoms/InputField/InputField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type Control, type FieldValues } from 'react-hook-form';
import {
  PROFILE_FORM_DEFAULT_VALUES,
  ProfileFormSchema,
  type ProfileFormType
} from './ProfileForm.schema';

const FIELD_STYLES = {
  container: 'md:flex-row md:items-center md:justify-between',
  label: 'md:w-1/3'
};

interface ProfileFormProps {
  onSubmitProfile: (formData: ProfileFormType) => void;
}

export const ProfileForm = ({ onSubmitProfile }: ProfileFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { isDirty }
  } = useForm<ProfileFormType>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: PROFILE_FORM_DEFAULT_VALUES
  });

  const onSubmit = (formData: FieldValues) => onSubmitProfile(formData);

  return (
    <form className="flex w-full gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex w-full flex-col gap-3">
        <InputField
          label="First name"
          name="firstName"
          control={control as unknown as Control<FieldValues>}
          placeholder="Enter your first name"
          className={FIELD_STYLES}
        />

        <InputField
          label="Last name"
          name="lastName"
          control={control as unknown as Control<FieldValues>}
          placeholder="Enter your last name"
          className={FIELD_STYLES}
        />

        <InputField
          label="Email"
          name="email"
          control={control as unknown as Control<FieldValues>}
          placeholder="Enter your email"
          className={FIELD_STYLES}
          isDisabled={true}
        />

        <InputField
          label="Username"
          name="username"
          control={control as unknown as Control<FieldValues>}
          placeholder="Enter a username"
          className={FIELD_STYLES}
          isDisabled={true}
        />

        <div className="flex w-full justify-end gap-4">
          {isDirty && (
            <Button
              ariaLabel="Cancel last changes"
              label="Cancel"
              isSecondary={true}
              className="py-1.5"
            />
          )}
          <Button
            ariaLabel="Save profile information"
            label="Save"
            className="py-1.5"
            isDisable={!isDirty}
          />
        </div>
      </div>
    </form>
  );
};
