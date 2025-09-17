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

export type UpdateProjectDTO = Partial<Pick<ProjectDTO, 'description'>> &
  Pick<ProjectDTO, 'id' | 'name' | 'code' | 'color'>;

export type ProfileDTO = {
  id: string;
  first_name?: string;
  last_name?: string;
  email: string;
  username: string;
};
