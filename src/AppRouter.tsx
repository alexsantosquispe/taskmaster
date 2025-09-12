import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { SignIn } from './pages/SignIn/SignIn';

const PublicRoute = lazy(() => import('./pages/PublicRoute'));
const ProtectedRoute = lazy(() => import('./pages/ProtectedRoute'));
const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const App = lazy(() => import('./App'));
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
          <Suspense>
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          </Suspense>
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

      <Route
        element={
          <Suspense>
            <ProtectedRoute />
          </Suspense>
        }
      >
        <Route
          path="home"
          element={
            <Suspense>
              <App />
            </Suspense>
          }
        >
          <Route
            index
            path="dashboard"
            element={
              <Suspense>
                <Dashboard />
              </Suspense>
            }
          />
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
