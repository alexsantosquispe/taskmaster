import { Button } from '@/components/atoms/Button/Button';
import { InputField } from '@/components/atoms/InputField/InputField';
import { TextAreaField } from '@/components/atoms/TextAreaField/TextAreaField';
import { useForm, type Control, type FieldValues } from 'react-hook-form';
import {
  NEW_PROJECT_FORM_NAMES,
  type NewProjectFormValues
} from './CreateProjectForm.types';

export const CreateProjectForm = () => {
  const { control, handleSubmit } = useForm<NewProjectFormValues>();

  const onSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-y-4 p-2"
    >
      <InputField
        label="Project name"
        name={NEW_PROJECT_FORM_NAMES.NAME}
        control={control as unknown as Control<FieldValues>}
        placeholder="Enter project name"
        isRequired
      />
      <TextAreaField
        label="Description"
        name={NEW_PROJECT_FORM_NAMES.DESCRIPTION}
        control={control as unknown as Control<FieldValues>}
        placeholder="Enter project description..."
      />
      <Button label="Create project" ariaLabel="Create project button" />
    </form>
  );
};
