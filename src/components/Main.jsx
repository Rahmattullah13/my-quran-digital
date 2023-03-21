import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import React from 'react';

const Main = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography component="h2" variant="h2" fontWeight='600' letterSpacing='1.3px' align="center" color="text.primary" gutterBottom>
              MyQuran Digital
            </Typography>
            <Typography letterSpacing="1.3px" fontSize="15px" variant="h5" align="center" color="text.secondary" paragraph>
              Membaca Al-Quran dengan mudah dimanapun dan kapanpun.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>This is a media card. You can use this section to describe the content.</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default Main;
