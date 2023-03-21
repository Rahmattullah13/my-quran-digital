import { Container, Box, Typography, Grid, Card, CardContent } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Main = () => {
  const [surat, setSurat] = useState([]);
  const getAPI = async () => {
    const response = await axios('https://equran.id/api/v2/surat');
    setSurat(response.data.data);
  };

  useEffect(() => {
    getAPI();
  }, []);
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
            <Typography component="h2" variant="h2" fontWeight="600" letterSpacing="1.3px" align="center" color="text.primary" gutterBottom>
              MyQuran Digital
            </Typography>
            <Typography letterSpacing="1.3px" fontSize="15px" variant="h5" align="center" color="text.secondary" paragraph>
              Membaca Al-Quran dengan mudah dimanapun dan kapanpun.
            </Typography>
          </Container>
        </Box>
        <Content data={surat} />
      </main>
    </>
  );
};

const Content = ({ data }) => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {data.map((data) => (
          <Grid item key={data.nomor} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography textAlign="center" gutterBottom variant="h5" component="h2">
                  {data.nama}
                </Typography>
                <Typography textAlign="center">{data.namaLatin}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Main;
