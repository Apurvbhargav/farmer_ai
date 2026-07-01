import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore.js';

const DashboardPage = () => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f7f2',
        display: 'flex',
        alignItems: 'center',
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: 3,
            border: '1px solid #dfe7d7',
            textAlign: 'center',
          }}
        >
          <Stack spacing={3} alignItems="center">
            <Typography variant="h3" fontWeight={800} color="#1f3326">
              Welcome to Farmer AI
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 560, lineHeight: 1.7 }}
            >
              Your dashboard is ready.
            </Typography>

            <Button variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
};

export default DashboardPage;