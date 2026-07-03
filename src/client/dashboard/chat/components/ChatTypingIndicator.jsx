import { Avatar, Box, Stack, Typography } from '@mui/material';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';

const dotStyles = {
  width: 7,
  height: 7,
  borderRadius: '50%',
  bgcolor: '#2f6f3e',
  animation: 'chatDotPulse 1.2s infinite ease-in-out',
};

const ChatTypingIndicator = ({ label = 'Farmer AI is thinking' }) => {
  return (
    <Stack direction="row" spacing={1.5} alignItems="flex-start">
      <Avatar
        sx={{
          width: 34,
          height: 34,
          bgcolor: '#2f6f3e',
          color: '#ffffff',
        }}
      >
        <AgricultureOutlinedIcon fontSize="small" />
      </Avatar>

      <Box
        sx={{
          px: 2,
          py: 1.4,
          borderRadius: 2,
          bgcolor: '#ffffff',
          border: '1px solid #dfe7d7',
          boxShadow: '0 8px 24px rgba(31, 51, 38, 0.05)',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            display: 'block',
            mb: 1,
            color: '#617064',
            fontWeight: 700,
          }}
        >
          {label}
        </Typography>

        <Stack
          direction="row"
          spacing={0.7}
          sx={{
            '@keyframes chatDotPulse': {
              '0%, 80%, 100%': {
                opacity: 0.35,
                transform: 'translateY(0)',
              },
              '40%': {
                opacity: 1,
                transform: 'translateY(-3px)',
              },
            },
          }}
        >
          <Box sx={{ ...dotStyles, animationDelay: '0ms' }} />
          <Box sx={{ ...dotStyles, animationDelay: '140ms' }} />
          <Box sx={{ ...dotStyles, animationDelay: '280ms' }} />
        </Stack>
      </Box>
    </Stack>
  );
};

export default ChatTypingIndicator;