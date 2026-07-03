import { useState } from 'react';
import { Box } from '@mui/material';
import ChatComposer from './components/ChatComposer';
import ChatWindow from './components/ChatWindow';

const createMessage = ({ role, content, agent }) => ({
  id: crypto.randomUUID(),
  role,
  content,
  agent,
  createdAt: new Date().toISOString(),
});

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = (messageText = draft) => {
    const cleanMessage = messageText.trim();

    if (!cleanMessage || loading) {
      return;
    }

    const userMessage = createMessage({
      role: 'user',
      content: cleanMessage,
    });

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setDraft('');
    setLoading(true);

    window.setTimeout(() => {
      const assistantMessage = createMessage({
        role: 'assistant',
        agent: 'Recommendation Agent',
        content:
          'I have received your question. Next, I will prepare farming context, ask follow-up questions if needed, check weather conditions, and provide a practical recommendation.',
      });

      setMessages((currentMessages) => [
        ...currentMessages,
        assistantMessage,
      ]);
      setLoading(false);
    }, 900);
  };

  const handleSuggestionClick = (suggestion) => {
    sendMessage(suggestion);
  };

  return (
    <Box
      sx={{
        height: 'calc(100vh - 120px)',
        minHeight: 520,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ChatWindow
        messages={messages}
        loading={loading}
        onSuggestionClick={handleSuggestionClick}
      />

      <Box
        sx={{
          maxWidth: 980,
          width: '100%',
          mx: 'auto',
          pt: 1,
        }}
      >
        <ChatComposer
          value={draft}
          disabled={loading}
          onChange={setDraft}
          onSubmit={() => sendMessage()}
        />
      </Box>
    </Box>
  );
};

export default ChatPage;