import { Button } from '@/components/atoms/Button/Button';
import { InputField } from '@/components/atoms/InputField/InputField';
import { TextAreaField } from '@/components/atoms/TextAreaField/TextAreaField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type Control, type FieldValues } from 'react-hook-form';
import {
  NewProjectFormDefaultValues,
  NewProjectFormSchema
} from './CreateProjectForm.schema';
import {
  NEW_PROJECT_FORM_NAMES,
  type NewProjectFormValues
} from './CreateProjectForm.types';

interface CreateProjectFormProps {
  onCreateProject: (formData: NewProjectFormValues) => void;
  isLoading: boolean;
}

export const CreateProjectForm = ({
  onCreateProject,
  isLoading
}: CreateProjectFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<NewProjectFormValues>({
    resolver: zodResolver(NewProjectFormSchema),
    defaultValues: NewProjectFormDefaultValues
  });

  const onSubmit = (formData: NewProjectFormValues) =>
    onCreateProject(formData);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-y-4 p-2"
    >
      <div className="grid grid-cols-5 gap-4">
        <InputField
          label="Project name"
          name={NEW_PROJECT_FORM_NAMES.NAME}
          control={control as unknown as Control<FieldValues>}
          errorMessage={errors[NEW_PROJECT_FORM_NAMES.NAME]?.message}
          placeholder="Enter project name"
          className="col-span-3"
          isRequired
        />

        <InputField
          label="Code"
          name={NEW_PROJECT_FORM_NAMES.CODE}
          errorMessage={errors[NEW_PROJECT_FORM_NAMES.CODE]?.message}
          control={control as unknown as Control<FieldValues>}
          placeholder="Project code"
          isRequired
        />

        <InputField
          label="Color"
          name={NEW_PROJECT_FORM_NAMES.COLOR}
          errorMessage={errors[NEW_PROJECT_FORM_NAMES.COLOR]?.message}
          control={control as unknown as Control<FieldValues>}
          placeholder="Pick a color"
        />
      </div>

      <TextAreaField
        label="Description"
        name={NEW_PROJECT_FORM_NAMES.DESCRIPTION}
        errorMessage={errors[NEW_PROJECT_FORM_NAMES.DESCRIPTION]?.message}
        control={control as unknown as Control<FieldValues>}
        placeholder="Enter project description..."
      />

      <Button
        label="Create project"
        ariaLabel="Create project button"
        className="self-end"
        isLoading={isLoading}
        isDisable={isLoading}
      />
    </form>
  );
};
