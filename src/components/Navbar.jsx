import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
const Navbar = () => {
  return (
    <AppBar color='success' position="relative">
      <Toolbar>
        <Typography fontSize='16px' letterSpacing='1px' variant="h6" color="inherit" noWrap>
          Membaca Al-Quran Dengan Mudah
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
