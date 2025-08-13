import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard } from './components/organisms/Dashboard/Dashboard';

const ProjectsLayout = lazy(
  () => import('./components/organisms/Projects/ProjectsLayout')
);
const Projects = lazy(() => import('./components/organisms/Projects/Projects'));
const Detail = lazy(() => import('./components/organisms/Detail/Detail'));
const Reports = lazy(() => import('./components/organisms/Reports/Reports'));
const Tasks = lazy(() => import('./components/organisms/Tasks/Tasks'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />

      <Route path="dashboard" element={<Dashboard />} />

      <Route
        path="projects"
        element={
          <Suspense>
            <ProjectsLayout />
          </Suspense>
        }
      >
        <Route
          index
          element={
            <Suspense>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path=":projectName"
          element={
            <Suspense>
              <Detail />
            </Suspense>
          }
        />
      </Route>

      <Route
        path="tasks"
        element={
          <Suspense>
            <Tasks />
          </Suspense>
        }
      />

      <Route
        path="reports"
        element={
          <Suspense>
            <Reports />
          </Suspense>
        }
      />
    </Routes>
  );
};
