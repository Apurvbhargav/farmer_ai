import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './client/features/pages/LoginPage';
import SignupPage from './client/features/pages/SignupPage';
import DashboardPage from '../src/client/dashboard/DashboardPage.jsx';
import { useAuthStore } from '../src/client/store/authStore.js';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/signup" element={<SignupPage />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;