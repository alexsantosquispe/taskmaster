import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard } from './components/organisms/Dashboard/Dashboard';
import { Detail } from './components/organisms/Detail/Detail';
import { Projects } from './components/organisms/Projects/Projects';
import { ProjectsLayout } from './components/organisms/Projects/ProjectsLayout';
import { Reports } from './components/organisms/Reports/Reports';
import { Tasks } from './components/organisms/Tasks/Tasks';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />

      <Route path="projects" element={<ProjectsLayout />}>
        <Route index element={<Projects />} />
        <Route path=":projectName" element={<Detail />} />
      </Route>

      <Route path="tasks" element={<Tasks />} />
      <Route path="reports" element={<Reports />} />
    </Routes>
  );
};
