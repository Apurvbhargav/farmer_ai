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

const LoginForm = ({
  values,
  errors = {},
  loading = false,
  submitError = '',
  onChange,
  onSubmit,
}) => {
  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      <Stack spacing={2.5}>
        {submitError ? (
          <Alert severity="error">
            {submitError}
          </Alert>
        ) : null}

        <TextField
          fullWidth
          label="Phone number"
          name="phone_number"
          value={values.phone_number}
          onChange={onChange}
          error={Boolean(errors.phone_number)}
          helperText={errors.phone_number}
          slotProps={{
  htmlInput: {
    inputMode: 'numeric',
  },
}}
          autoComplete="tel"
        />

        <PasswordField
          label="Password"
          name="password"
          value={values.password}
          onChange={onChange}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />

        <LoadingButton loading={loading}>
          Login
        </LoadingButton>

        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
        >
          Don&apos;t have an account?{' '}
          <Link
            component={RouterLink}
            to="/signup"
            underline="hover"
            fontWeight={700}
            color="#2f6f3e"
          >
            Create account
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default LoginForm;