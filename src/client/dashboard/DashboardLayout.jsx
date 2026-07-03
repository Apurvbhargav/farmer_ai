import { useState } from 'react';
import { Box, Drawer, useMediaQuery, useTheme } from '@mui/material';
import DashboardHeader from '../components/DashboardHeader.jsx';
import DashboardSidebar from '../components/DashboardSidebar.jsx';

const DashboardLayout = ({
  children,
  username,
  activeItem,
  onNavigate,
  onLogout,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    if (isMobile) {
      setMobileSidebarOpen(true);
      return;
    }

    setSidebarCollapsed((current) => !current);
  };

  const handleNavigate = (item) => {
    onNavigate(item);

    if (isMobile) {
      setMobileSidebarOpen(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f7f2',
        display: 'flex',
      }}
    >
      {!isMobile ? (
        <DashboardSidebar
          activeItem={activeItem}
          collapsed={sidebarCollapsed}
          onNavigate={handleNavigate}
          onLogout={onLogout}
        />
      ) : null}

      <Drawer
        open={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 280,
            borderRight: '1px solid #dfe7d7',
          },
        }}
      >
        <DashboardSidebar
          activeItem={activeItem}
          collapsed={false}
          onNavigate={handleNavigate}
          onLogout={onLogout}
        />
      </Drawer>

      <Box
        sx={{
          minWidth: 0,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <DashboardHeader username={username} onMenuClick={handleMenuClick} />

        <Box
          component="main"
          sx={{
            flex: 1,
            minHeight: 0,
            p: { xs: 2, sm: 3 },
            overflow: 'auto',
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;