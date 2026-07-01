import { Box, Container, Paper, Stack, Typography } from '@mui/material';
import heroImg from '../../../assets/hero.png';

const AuthLayout = ({ title, subtitle, children }) => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f7f2',
        display: 'flex',
        alignItems: 'center',
        py: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            overflow: 'hidden',
            borderRadius: 3,
            border: '1px solid #dfe7d7',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            minHeight: { md: 620 },
          }}
        >
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              position: 'relative',
              bgcolor: '#23452f',
              color: '#fff',
              p: 6,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Stack spacing={2}>
              <Typography variant="h3" fontWeight={800}>
                Farmer AI
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.82)',
                  lineHeight: 1.6,
                  maxWidth: 420,
                }}
              >
                Smart farming support for better crop decisions, local insights,
                and easier farm management.
              </Typography>
            </Stack>

            <Box
              component="img"
              src={heroImg}
              alt="Farmer AI"
              sx={{
                width: '78%',
                maxWidth: 360,
                alignSelf: 'center',
                objectFit: 'contain',
                filter: 'drop-shadow(0 24px 32px rgba(0,0,0,0.28))',
              }}
            />
          </Box>

          <Box
            sx={{
              bgcolor: '#fff',
              px: { xs: 3, sm: 5, md: 6 },
              py: { xs: 4, sm: 6 },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 460, mx: 'auto' }}>
              <Stack spacing={1} sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  fontWeight={800}
                  color="#1f3326"
                >
                  {title}
                </Typography>

                {subtitle ? (
                  <Typography color="text.secondary" lineHeight={1.6}>
                    {subtitle}
                  </Typography>
                ) : null}
              </Stack>

              {children}
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default AuthLayout;