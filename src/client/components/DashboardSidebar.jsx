import {
  Box,
  Button,
  Divider,
  List,
  Stack,
  Typography,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SidebarNavItem from './SidebarNavItem';

const DashboardSidebar = ({
  activeItem = 'home',
  collapsed = false,
  onNavigate,
  onLogout,
}) => {
  return (
    <Box
      component="aside"
      sx={{
        width: collapsed ? 84 : 280,
        minWidth: collapsed ? 84 : 280,
        height: '100vh',
        bgcolor: '#ffffff',
        borderRight: '1px solid #dfe7d7',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
        transition: 'width 180ms ease, min-width 180ms ease',
      }}
    >
      {!collapsed ? (
        <Stack spacing={1.5} sx={{ mb: 2 }}>
          {/* <Typography
            variant="overline"
            sx={{
              color: '#8a9a8d',
              fontWeight: 800,
              letterSpacing: 0,
            }}
          >
            Workspace
          </Typography> */}
        </Stack>
      ) : null}

      <List disablePadding sx={{ display: 'grid', gap: 0.75 }}>
        <SidebarNavItem
          label="Home"
          icon={<HomeOutlinedIcon fontSize="small" />}
          active={activeItem === 'home'}
          collapsed={collapsed}
          onClick={() => onNavigate('home')}
        />

        <SidebarNavItem
          label="New Chat"
          icon={<AddCommentOutlinedIcon fontSize="small" />}
          active={activeItem === 'new-chat'}
          collapsed={collapsed}
          onClick={() => onNavigate('new-chat')}
        />

        <SidebarNavItem
          label="Previous Chats"
          icon={<HistoryOutlinedIcon fontSize="small" />}
          active={activeItem === 'previous-chats'}
          collapsed={collapsed}
          onClick={() => onNavigate('previous-chats')}
        />
      </List>

      <Box sx={{ flex: 1 }} />

      <Divider sx={{ borderColor: '#e3eadf', mb: 2 }} />

      <Button
        fullWidth
        variant="text"
        color="error"
        startIcon={<LogoutOutlinedIcon />}
        onClick={onLogout}
        sx={{
          justifyContent: collapsed ? 'center' : 'flex-start',
          minWidth: 0,
          borderRadius: 2,
          px: collapsed ? 1 : 1.5,
          py: 1.2,
          textTransform: 'none',
          fontWeight: 700,
          '& .MuiButton-startIcon': {
            mr: collapsed ? 0 : 1,
          },
        }}
      >
        {collapsed ? '' : 'Logout'}
      </Button>
    </Box>
  );
};

export default DashboardSidebar;