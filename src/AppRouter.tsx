import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard/Dashboard';

const ProjectsLayout = lazy(() => import('./pages/Projects/ProjectsLayout'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Detail = lazy(() => import('./pages/Detail/Detail'));
const Reports = lazy(() => import('./pages/Reports/Reports'));
const Tasks = lazy(() => import('./pages/Tasks/Tasks'));

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
