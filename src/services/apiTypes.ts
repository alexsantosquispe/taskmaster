export interface ProjectDTO {
  id: string;
  name: string;
  code: string;
  color: string;
  description: string;
  create_date: string;
  update_date: string;
}

export type CreateProjectDTO = Partial<
  Pick<ProjectDTO, 'color' | 'description'>
> &
  Pick<ProjectDTO, 'name' | 'code'>;
