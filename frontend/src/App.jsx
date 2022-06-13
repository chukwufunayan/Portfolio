import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Navbar from './components/navbar/navbar';

function App() {
  const [themeMode, setThemeMode] = useState('dark');
  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        phone: 320,
        tablet: 640,
        laptop: 1024,
        desktop: 1280,
      },
    },
    palette: {
      mode: 'dark',
    },
    mode: themeMode,
  });
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: '1024px', margin: 'auto' }}>
        <Navbar setTheme={setThemeMode} />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
