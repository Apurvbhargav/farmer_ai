import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';

const DashboardHeader = ({ username = 'Farmer', onMenuClick }) => {
  const userInitial = username?.trim()?.charAt(0)?.toUpperCase() || 'F';

  return (
    <Box
      component="header"
      sx={{
        height: 72,
        minHeight: 72,
        bgcolor: '#ffffff',
        borderBottom: '1px solid #dfe7d7',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 2, sm: 3 },
      }}
    >
      <Stack direction="row" spacing={1.5} alignItems="center">
        <IconButton
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
          sx={{
            color: '#1f3326',
            bgcolor: '#f1f6ef',
            '&:hover': {
              bgcolor: '#e7f3e9',
            },
          }}
        >
          <MenuOutlinedIcon />
        </IconButton>

        <Avatar
          sx={{
            width: 42,
            height: 42,
            bgcolor: '#2f6f3e',
            color: '#ffffff',
          }}
        >
          <AgricultureOutlinedIcon />
        </Avatar>

        <Box>
          <Typography
            variant="h6"
            fontWeight={800}
            color="#1f3326"
            sx={{ lineHeight: 1.15 }}
          >
            Farmer AI
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Smart farming assistant
          </Typography>
        </Box>
      </Stack>

      <Stack direction="row" spacing={1.25} alignItems="center">
        <Box sx={{ textAlign: 'right', display: { xs: 'none', sm: 'block' } }}>
          <Typography variant="body2" fontWeight={900} color="#000000">
            {username}
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Farmer
          </Typography>
        </Box>

        <Avatar
          sx={{
            width: 38,
            height: 38,
            bgcolor: '#e7f3e9',
            color: '#2f6f3e',
            fontWeight: 800,
          }}
        >
          {userInitial}
        </Avatar>
      </Stack>
    </Box>
  );
};

export default DashboardHeader;