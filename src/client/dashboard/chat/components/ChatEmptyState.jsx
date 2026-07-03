import {
  Box,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import AgricultureOutlinedIcon from '@mui/icons-material/AgricultureOutlined';

const ChatEmptyState = () => {
  return (
    <Box
      sx={{
        minHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: '100%',
          maxWidth: 720,
          p: { xs: 3, sm: 4 },
          borderRadius: 3,
          border: '1px solid #dfe7d7',
          bgcolor: '#ffffff',
          textAlign: 'center',
        }}
      >
        <Stack spacing={2.5} alignItems="center">
          <Box
            sx={{
              width: 58,
              height: 58,
              borderRadius: '50%',
              bgcolor: '#e7f3e9',
              color: '#2f6f3e',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <AgricultureOutlinedIcon fontSize="large" />
          </Box>

          <Stack spacing={1}>
            <Typography variant="h4" fontWeight={900} color="#1f3326">
              Ask Farmer AI
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 560, lineHeight: 1.7 }}
            >
              Describe your crop, location, issue, or farming goal. Farmer AI
              can prepare context, ask follow-up questions, check weather, and
              suggest next steps.
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

export default ChatEmptyState;