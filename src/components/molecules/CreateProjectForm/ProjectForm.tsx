import { Button } from '@/components/atoms/Button/Button';
import { ColorPickerWithController } from '@/components/atoms/ColorPicker/ColorPicker';
import { InputField } from '@/components/atoms/InputField/InputField';
import { TextAreaField } from '@/components/atoms/TextAreaField/TextAreaField';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type Control, type FieldValues } from 'react-hook-form';
import {
  PROJECT_FORM_DEFAULT_VALUES,
  ProjectFormSchema
} from './ProjectForm.schema';
import {
  PROJECT_FORM_NAMES,
  type ProjectFormValues
} from './ProjectForm.types';

interface ProjectFormProps {
  submitButtonLabel: string;
  onSubmitProject: (formData: ProjectFormValues) => void;
  isLoading: boolean;
  defaultValues?: ProjectFormValues;
}

export const ProjectForm = ({
  submitButtonLabel,
  onSubmitProject,
  isLoading,
  defaultValues
}: ProjectFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ProjectFormValues>({
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: defaultValues ?? PROJECT_FORM_DEFAULT_VALUES
  });

  const onSubmit = (formData: ProjectFormValues) => onSubmitProject(formData);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-y-4 p-2"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <InputField
          label="Project name"
          name={PROJECT_FORM_NAMES.NAME}
          control={control as unknown as Control<FieldValues>}
          errorMessage={
            !isLoading ? errors[PROJECT_FORM_NAMES.NAME]?.message : ''
          }
          placeholder="Enter project name"
          isDisabled={isLoading}
          isRequired
        />

        <div className="flex gap-4 md:w-1/2">
          <InputField
            label="Code"
            name={PROJECT_FORM_NAMES.CODE}
            errorMessage={
              !isLoading ? errors[PROJECT_FORM_NAMES.CODE]?.message : ''
            }
            className={{ container: 'w-full', input: 'uppercase' }}
            control={control as unknown as Control<FieldValues>}
            placeholder="XYZ"
            isDisabled={isLoading}
            isRequired
          />

          <ColorPickerWithController
            label="Color"
            name={PROJECT_FORM_NAMES.COLOR}
            control={control as unknown as Control<FieldValues>}
            className="self-end"
          />
        </div>
      </div>

      <TextAreaField
        label="Description"
        name={PROJECT_FORM_NAMES.DESCRIPTION}
        errorMessage={errors[PROJECT_FORM_NAMES.DESCRIPTION]?.message}
        control={control as unknown as Control<FieldValues>}
        placeholder="Enter project description..."
        isDisabled={isLoading}
      />

      <Button
        label={submitButtonLabel}
        ariaLabel={`${submitButtonLabel} button`}
        className="self-end"
        isLoading={isLoading}
        type="submit"
      />
    </form>
  );
};
