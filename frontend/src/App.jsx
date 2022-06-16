import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Navbar from './components/navbar/navbar';

function App() {
  const [themeMode, setThemeMode] = useState('dark');
  const getThemeDesign = (theme) => ({
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
      mode: theme,
      ...(theme === 'light'
        ? {
            primary: {
              main: '#00ba34',
              contrastText: '#E2E8F0',
            },
            secondary: {
              main: '#e92c2c',
            },
            background: { default: '#f0e7db' },
          }
        : {
            primary: {
              main: '#33C75C',
              contrastText: '#E2E8F0',
            },
            secondary: {
              main: '#ED5656',
            },
          }),
    },
  });
  const theme = useMemo(
    () => createTheme(getThemeDesign(themeMode)),
    [themeMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ maxWidth: '1024px', margin: 'auto' }}>
        <Navbar themeMode={themeMode} setTheme={setThemeMode} />
        <Box height="4.05rem" />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
