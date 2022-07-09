import React, { useMemo, useState } from 'react';
import { Outlet } from 'react-router-dom';
// Mui
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
// components
import Navbar from './components/navbar/navbar';
import Voxelreplica from './components/voxelreplica/voxelreplica';
// utils
import themeDesign from './util/themeDesign';

const { getThemeDesign } = themeDesign();

function App() {
  const [themeMode, setThemeMode] = useState('dark');
  const theme = useMemo(
    () => createTheme(getThemeDesign(themeMode)),
    [themeMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: 'background.default' }}>
        <Box
          sx={{
            maxWidth: '1024px',
            margin: 'auto',
          }}
        >
          <Navbar themeMode={themeMode} setTheme={setThemeMode} />
          <Voxelreplica />
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
