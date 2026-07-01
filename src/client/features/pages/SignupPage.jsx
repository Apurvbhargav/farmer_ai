import { useState } from 'react';
import AuthLayout from '../../components/auth/AuthLayout';
import SignupForm from '../../components/auth/SignupForm';

const initialValues = {
  full_name: '',
  phone_number: '',
  password: '',
  state: null,
  district: null,
  village: null,
};

const sampleStates = [
  { id: 1, name: 'Maharashtra' },
  { id: 2, name: 'Gujarat' },
  { id: 3, name: 'Punjab' },
];

const sampleDistricts = [
  { id: 1, name: 'Pune', state_id: 1 },
  { id: 2, name: 'Nashik', state_id: 1 },
  { id: 3, name: 'Ahmedabad', state_id: 2 },
  { id: 4, name: 'Ludhiana', state_id: 3 },
];

const sampleVillages = [
  { id: 1, name: 'Shirur', district_id: 1 },
  { id: 2, name: 'Baramati', district_id: 1 },
  { id: 3, name: 'Sinnar', district_id: 2 },
  { id: 4, name: 'Dholka', district_id: 3 },
  { id: 5, name: 'Jagraon', district_id: 4 },
];

const SignupPage = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const filteredDistricts = values.state
    ? sampleDistricts.filter(
        (district) => district.state_id === values.state.id,
      )
    : [];

  const filteredVillages = values.district
    ? sampleVillages.filter(
        (village) => village.district_id === values.district.id,
      )
    : [];

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

  const handleLocationChange = (name, selectedOption) => {
    setValues((currentValues) => {
      if (name === 'state') {
        return {
          ...currentValues,
          state: selectedOption,
          district: null,
          village: null,
        };
      }

      if (name === 'district') {
        return {
          ...currentValues,
          district: selectedOption,
          village: null,
        };
      }

      return {
        ...currentValues,
        [name]: selectedOption,
      };
    });

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: '',
    }));
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!values.full_name.trim()) {
      nextErrors.full_name = 'Full name is required';
    }

    if (!values.phone_number.trim()) {
      nextErrors.phone_number = 'Phone number is required';
    }

    if (!values.password) {
      nextErrors.password = 'Password is required';
    }

    if (!values.state) {
      nextErrors.state = 'State is required';
    }

    if (!values.district) {
      nextErrors.district = 'District is required';
    }

    if (!values.village) {
      nextErrors.village = 'Village is required';
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
      full_name: values.full_name,
      phone_number: values.phone_number,
      password: values.password,
      state_id: values.state.id,
      district_id: values.district.id,
      village_id: values.village.id,
    };

    console.log('Signup payload:', payload);
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join Farmer AI and set up your local farming profile."
    >
      <SignupForm
        values={values}
        errors={errors}
        loading={false}
        submitError={submitError}
        locationOptions={{
          states: sampleStates,
          districts: filteredDistricts,
          villages: filteredVillages,
        }}
        locationLoading={{
          states: false,
          districts: false,
          villages: false,
        }}
        onChange={handleChange}
        onLocationChange={handleLocationChange}
        onSubmit={handleSubmit}
      />
    </AuthLayout>
  );
};

export default SignupPage;