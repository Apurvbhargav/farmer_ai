import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './client/features/pages/LoginPage';
import SignupPage from './client/features/pages/SignupPage';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  );
};

export default App;