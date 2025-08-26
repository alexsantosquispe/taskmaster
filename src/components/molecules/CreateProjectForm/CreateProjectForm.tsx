import { Button } from '@/components/atoms/Button/Button';
import { ColorPickerWithController } from '@/components/atoms/ColorPicker/ColorPicker';
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
  const isFormDisabled = isLoading;

  const onSubmit = (formData: NewProjectFormValues) => {
    onCreateProject(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-y-4 p-2"
    >
      <div className="flex gap-4">
        <InputField
          label="Project name"
          name={NEW_PROJECT_FORM_NAMES.NAME}
          control={control as unknown as Control<FieldValues>}
          errorMessage={
            !isFormDisabled ? errors[NEW_PROJECT_FORM_NAMES.NAME]?.message : ''
          }
          placeholder="Enter project name"
          isDisabled={isFormDisabled}
          isRequired
        />

        <InputField
          label="Code"
          name={NEW_PROJECT_FORM_NAMES.CODE}
          errorMessage={
            !isFormDisabled ? errors[NEW_PROJECT_FORM_NAMES.CODE]?.message : ''
          }
          className={{ container: 'w-1/4', input: 'uppercase' }}
          control={control as unknown as Control<FieldValues>}
          placeholder="XYZ"
          isDisabled={isFormDisabled}
          isRequired
        />

        <ColorPickerWithController
          label="Color"
          name={NEW_PROJECT_FORM_NAMES.COLOR}
          control={control as unknown as Control<FieldValues>}
          className="self-end"
        />
      </div>

      <TextAreaField
        label="Description"
        name={NEW_PROJECT_FORM_NAMES.DESCRIPTION}
        errorMessage={errors[NEW_PROJECT_FORM_NAMES.DESCRIPTION]?.message}
        control={control as unknown as Control<FieldValues>}
        placeholder="Enter project description..."
        isDisabled={isFormDisabled}
      />

      <Button
        label="Create project"
        ariaLabel="Create project button"
        className="self-end"
        isLoading={isLoading}
        isDisable={isFormDisabled}
        type="submit"
      />
    </form>
  );
};
