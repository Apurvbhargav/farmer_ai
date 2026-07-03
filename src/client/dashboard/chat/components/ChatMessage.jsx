import { Avatar, Box, Stack, Typography } from '@mui/material';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

const ChatMessage = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <Stack
      direction="row"
      spacing={1.5}
      justifyContent={isUser ? 'flex-end' : 'flex-start'}
      alignItems="flex-start"
      sx={{ width: '100%' }}
    >
      {!isUser ? (
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
      ) : null}

      <Box
        sx={{
          maxWidth: { xs: '82%', md: '68%' },
          px: 2,
          py: 1.4,
          borderRadius: 2,
          bgcolor: isUser ? '#2f6f3e' : '#ffffff',
          color: isUser ? '#ffffff' : '#1f3326',
          border: isUser ? 'none' : '1px solid #dfe7d7',
          boxShadow: isUser ? 'none' : '0 8px 24px rgba(31, 51, 38, 0.05)',
        }}
      >
        {message.agent ? (
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              mb: 0.5,
              fontWeight: 800,
              color: isUser ? 'rgba(255,255,255,0.78)' : '#2f6f3e',
            }}
          >
            {message.agent}
          </Typography>
        ) : null}

        <Typography
          variant="body2"
          sx={{
            lineHeight: 1.7,
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          {message.content}
        </Typography>
      </Box>

      {isUser ? (
        <Avatar
          sx={{
            width: 34,
            height: 34,
            bgcolor: '#e7f3e9',
            color: '#2f6f3e',
          }}
        >
          <PersonOutlineOutlinedIcon fontSize="small" />
        </Avatar>
      ) : null}
    </Stack>
  );
};

export default ChatMessage;