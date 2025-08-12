import { Navigate, Route, Routes } from 'react-router-dom';

import { Dashboard } from './components/organisms/Dashboard/Dashboard';
import { Projects } from './components/organisms/Projects/Projects';
import { Reports } from './components/organisms/Reports/Reports';
import { Tasks } from './components/organisms/Tasks/Tasks';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
};
