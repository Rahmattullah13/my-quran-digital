import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/Rahmattullah13">
          Rahmattullah13
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  return (
    <>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          MyQuran Digital
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Membaca Alquran dengan mudah dimanapun dan kapanpun.
        </Typography>
        <Copyright />
      </Box>
    </>
  );
};

export default Footer;
