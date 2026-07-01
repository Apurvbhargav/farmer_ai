import { useState } from 'react';
import {
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const PasswordField = ({
  label = 'Password',
  name = 'password',
  value,
  onChange,
  error,
  helperText,
  autoComplete = 'current-password',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      type={showPassword ? 'text' : 'password'}
      error={error}
      helperText={helperText}
      autoComplete={autoComplete}
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <VisibilityOffOutlinedIcon />
                ) : (
                  <VisibilityOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};

export default PasswordField;