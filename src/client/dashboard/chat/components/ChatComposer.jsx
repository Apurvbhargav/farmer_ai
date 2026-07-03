import { Box, IconButton, Paper, TextField } from '@mui/material';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const ChatComposer = ({
  value,
  disabled = false,
  placeholder = 'Ask about crops, weather, pests, soil, irrigation...',
  onChange,
  onSubmit,
}) => {
  const canSend = value.trim().length > 0 && !disabled;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      if (canSend) {
        onSubmit();
      }
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: 3,
        border: '1px solid #dfe7d7',
        bgcolor: '#ffffff',
        p: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          alignItems: 'flex-end',
        }}
      >
        <TextField
          fullWidth
          multiline
          minRows={1}
          maxRows={5}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          variant="standard"
          slotProps={{
            input: {
              disableUnderline: true,
              sx: {
                px: 1.5,
                py: 1.2,
                fontSize: 15,
                lineHeight: 1.6,
              },
            },
          }}
        />

        <IconButton
          onClick={onSubmit}
          disabled={!canSend}
          aria-label="Send message"
          sx={{
            width: 44,
            height: 44,
            borderRadius: 2,
            bgcolor: canSend ? '#2f6f3e' : '#edf2ea',
            color: canSend ? '#ffffff' : '#a3afa5',
            '&:hover': {
              bgcolor: canSend ? '#285f35' : '#edf2ea',
            },
            '&.Mui-disabled': {
              bgcolor: '#edf2ea',
              color: '#a3afa5',
            },
          }}
        >
          <SendRoundedIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatComposer;