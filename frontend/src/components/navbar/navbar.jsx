import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Popover from '@mui/material/Popover';

import logo from '../../icons/Flag-map_of_Nigeria.svg.png';
import NavbarPopupBox from '../navbarpopupbox/navbarpopupbox';

const id = 'menu-popover';

function navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navbarRef = useRef();
  const handleClick = () => {
    setAnchorEl(navbarRef.current);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      sx={{
        backgroundColor: '#20202380',
        padding: '.4rem .5rem',
        display: 'flex',
        justifyContent: 'space-between',
        position: 'fixed',
        width: '100%',
        maxWidth: '1024px',
      }}
      ref={navbarRef}
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
        <Button
          sx={{
            backgroundColor: '#FBD38D',
            padding: '.75rem .45rem',
            display: (theme) => (theme.mode === 'dark' ? '' : 'none'),
          }}
        >
          <LightModeIcon sx={{ color: '#1A202C' }} />
        </Button>
        <Button
          sx={{
            backgroundColor: '#6B46C1',
            padding: '.75rem .45rem',
            display: (theme) => (theme.mode === 'light' ? '' : 'none'),
          }}
        >
          <DarkModeIcon
            sx={{
              color: '#E2E8F0',
            }}
          />
        </Button>
        <Button
          sx={{
            backgroundColor: '#f7f3f321',
            border: 'white solid 1px',
            padding: '.75rem .45rem',
            display: { tablet: 'none' },
          }}
          aria-describedby={id}
          onClick={handleClick}
        >
          {open ? (
            <CloseIcon
              sx={{
                color: '#E2E8F0',
              }}
            />
          ) : (
            <MenuIcon
              sx={{
                color: '#E2E8F0',
              }}
            />
          )}
        </Button>
      </Stack>
      <Popover
        sx={{ display: { tablet: 'none' } }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <NavbarPopupBox />
      </Popover>
    </Box>
  );
}

export default navbar;
