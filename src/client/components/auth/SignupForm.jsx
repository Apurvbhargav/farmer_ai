import { Link as RouterLink } from 'react-router-dom';
import {
  Alert,
  Box,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import PasswordField from '../common/PasswordField';
import LoadingButton from '../common/LoadingButton';
import LocationDropdowns from './LocationDropdowns';

const SignupForm = ({
  values,
  errors = {},
  loading = false,
  submitError = '',
  locationOptions,
  locationLoading,
  onChange,
  onLocationChange,
  onSubmit,
}) => {
  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      <Stack spacing={2.25}>
        {submitError ? (
          <Alert severity="error">
            {submitError}
          </Alert>
        ) : null}

        <TextField
          fullWidth
          label="Full name"
          name="full_name"
          value={values.full_name}
          onChange={onChange}
          error={Boolean(errors.full_name)}
          helperText={errors.full_name}
          autoComplete="name"
        />

        <TextField
          fullWidth
          label="Phone number"
          name="phone_number"
          value={values.phone_number}
          onChange={onChange}
          error={Boolean(errors.phone_number)}
          helperText={errors.phone_number}
          inputProps={{ inputMode: 'numeric' }}
          autoComplete="tel"
        />

        <PasswordField
          label="Password"
          name="password"
          value={values.password}
          onChange={onChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
          autoComplete="new-password"
        />

        <LocationDropdowns
          values={{
            state: values.state,
            district: values.district,
            village: values.village,
          }}
          errors={{
            state: errors.state,
            district: errors.district,
            village: errors.village,
          }}
          states={locationOptions.states}
          districts={locationOptions.districts}
          villages={locationOptions.villages}
          loadingStates={locationLoading.states}
          loadingDistricts={locationLoading.districts}
          loadingVillages={locationLoading.villages}
          onChange={onLocationChange}
        />

        <LoadingButton loading={loading}>
          Create account
        </LoadingButton>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
        >
          Already have an account?{' '}
          <Link
            component={RouterLink}
            to="/login"
            underline="hover"
            fontWeight={700}
            color="#2f6f3e"
          >
            Login
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default SignupForm;