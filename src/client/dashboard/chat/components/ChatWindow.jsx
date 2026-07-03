import { useEffect, useRef } from 'react';
import { Box, Stack } from '@mui/material';
import ChatEmptyState from './ChatEmptyState';
import ChatMessage from './ChatMessage';
import ChatTypingIndicator from './ChatTypingIndicator';

const ChatWindow = ({
  messages = [],
  loading = false,
  onSuggestionClick,
}) => {
  const bottomRef = useRef(null);
  const hasMessages = messages.length > 0;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  return (
    <Box
      sx={{
        flex: 1,
        minHeight: 0,
        overflowY: 'auto',
        px: { xs: 0, sm: 1 },
        py: 2,
      }}
    >
      {!hasMessages ? (
        <ChatEmptyState onSuggestionClick={onSuggestionClick} />
      ) : (
        <Stack spacing={2.25} sx={{ maxWidth: 980, mx: 'auto' }}>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {loading ? (
            <ChatTypingIndicator label="Preparing farming recommendation" />
          ) : null}

          <Box ref={bottomRef} />
        </Stack>
      )}
    </Box>
  );
};

export default ChatWindow;