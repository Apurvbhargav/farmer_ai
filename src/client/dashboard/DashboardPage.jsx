import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import DashboardLayout from './DashboardLayout';
import ChatPage from './chat/ChatPage.jsx';
import { useAuthStore } from '../store/authStore.js'

const dashboardContent = {
  home: {
    title: 'Welcome to Farmer AI',
    description:
      'Get crop guidance, local insights, and AI-powered support for your farming decisions.',
  },
  'previous-chats': {
    title: 'Previous Chats',
    description:
      'Your past conversations will appear here once chat history is connected.',
  },
};

const DashboardPage = () => {
  const navigate = useNavigate();

  const farmer = useAuthStore((state) => state.farmer);
  const logout = useAuthStore((state) => state.logout);

  const [activeItem, setActiveItem] = useState('home');

  const username = farmer?.full_name || farmer?.name || 'Farmer';

  const handleNavigate = (item) => {
    setActiveItem(item);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const renderContent = () => {
    if (activeItem === 'new-chat') {
      return <ChatPage />;
    }

    const currentContent = dashboardContent[activeItem] || dashboardContent.home;

    return (
      <Box sx={{ maxWidth: 920 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            border: '1px solid #dfe7d7',
            bgcolor: '#ffffff',
          }}
        >
          <Stack spacing={1.5}>
            <Typography variant="h4" fontWeight={800} color="#1f3326">
              {currentContent.title}
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                maxWidth: 680,
                lineHeight: 1.7,
              }}
            >
              {currentContent.description}
            </Typography>
          </Stack>
        </Paper>
      </Box>
    );
  };

  return (
    <DashboardLayout
      username={username}
      activeItem={activeItem}
      onNavigate={handleNavigate}
      onLogout={handleLogout}
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default DashboardPage;