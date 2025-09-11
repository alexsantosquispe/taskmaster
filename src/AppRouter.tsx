import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import App from './App';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { PublicRoute } from './pages/PublicRoute';
import { SignIn } from './pages/SignIn/SignIn';

const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const ProjectsLayout = lazy(() => import('./pages/Projects/ProjectsLayout'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Detail = lazy(() => import('./pages/Detail/Detail'));
const Reports = lazy(() => import('./pages/Reports/Reports'));
const Tasks = lazy(() => import('./pages/Tasks/Tasks'));

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route
        path="login"
        element={
          <PublicRoute>
            <SignIn />
          </PublicRoute>
        }
      />
      <Route
        path="signup"
        element={
          <Suspense>
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          </Suspense>
        }
      />

      <Route element={<ProtectedRoute />}>
        <Route path="home" element={<App />}>
          <Route index path="dashboard" element={<Dashboard />} />
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
        </Route>
      </Route>
    </Routes>
  );
};
