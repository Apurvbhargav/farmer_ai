import { Button, CircularProgress } from '@mui/material';

const LoadingButton = ({
  children,
  loading = false,
  disabled = false,
  type = 'submit',
  ...props
}) => {
  return (
    <Button
      fullWidth
      type={type}
      variant="contained"
      size="large"
      disabled={loading || disabled}
      sx={{
        py: 1.45,
        borderRadius: 2,
        fontWeight: 700,
        textTransform: 'none',
        bgcolor: '#2f6f3e',
        boxShadow: '0 10px 24px rgba(47, 111, 62, 0.24)',
        '&:hover': {
          bgcolor: '#285f35',
          boxShadow: '0 12px 28px rgba(47, 111, 62, 0.3)',
        },
      }}
      {...props}
    >
      {loading ? (
        <CircularProgress size={24} sx={{ color: '#fff' }} />
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;