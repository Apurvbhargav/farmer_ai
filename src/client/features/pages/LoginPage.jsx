import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';
import { loginFarmer } from '../../../api/authApi';
import { useAuthStore } from '../../store/authStore.js';

const initialValues = {
  phone_number: '',
  password: '',
};

const LoginPage = () => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!values.phone_number.trim()) {
      nextErrors.phone_number = 'Phone number is required';
    }

    if (!values.password) {
      nextErrors.password = 'Password is required';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const data = await loginFarmer({
        phone_number: values.phone_number,
        password: values.password,
      });

      if (!data.access_token) {
        setSubmitError(data.message || 'Invalid credentials');
        return;
      }

      setToken(data.access_token);
      navigate('/dashboard');
    } catch (error) {
      setSubmitError(
        error.response?.data?.message ||
          error.response?.data?.detail ||
          'Login failed. Please try again.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Login to continue managing your Farmer AI account."
    >
      <LoginForm
        values={values}
        errors={errors}
        loading={loading}
        submitError={submitError}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
};

export default LoginPage;