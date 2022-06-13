import { React } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import logo from '../../icons/Flag-map_of_Nigeria.svg.png';

function navbar() {
  return (
    <Box
      sx={{
        backgroundColor: '#20202380',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <img
          alt="naija flag logo"
          src={logo}
          style={{ width: '40px', height: '30px' }}
        />
        <p>Funayan Oji</p>
      </Stack>
      <Stack direction={{ mobile: 'column', phone: 'row' }} spacing={1}>
        <Button sx={{ backgroundColor: '#FBD38D', padding: '1rem' }}>
          <LightModeIcon sx={{ color: '#1A202C' }} />
        </Button>
        <Button sx={{ backgroundColor: '#6B46C1', padding: '1rem' }}>
          <DarkModeIcon
            sx={{
              color: '#E2E8F0',
            }}
          />
        </Button>
      </Stack>
    </Box>
  );
}
export default navbar;
