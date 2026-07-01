import { useState } from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import LoginForm from '../../components/auth/LoginForm';

const initialValues = {
  phone_number: '',
  password: '',
};

const LoginPage = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

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

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    const payload = {
      phone_number: values.phone_number,
      password: values.password,
    };

    console.log('Login payload:', payload);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Login to continue managing your Farmer AI account."
    >
      <LoginForm
        values={values}
        errors={errors}
        loading={false}
        submitError={submitError}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
};

export default LoginPage;