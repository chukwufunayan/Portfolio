import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Popover from '@mui/material/Popover';

import { motion } from 'framer-motion';

import logo from '../../icons/Flag-map_of_Nigeria.svg.png';
import Themebutton from '../themebutton/themebutton';
import Navbarlinks from '../navbarlinks/navbarlinks';

const id = 'menu-popover';
const logoVariantChild = { hoverStart: { rotate: 15 } };
const logoVariantParent = { hoverStart: { rotate: 0 } };

function navbar({ themeMode, setTheme }) {
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
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        maxWidth: '1024px',
      }}
      ref={navbarRef}
    >
      <motion.div whileHover="hoverStart" variants={logoVariantParent}>
        <Stack direction="row" spacing={1} alignItems="center">
          <motion.div variants={logoVariantChild}>
            <img
              alt="naija flag logo"
              src={logo}
              style={{ width: '40px', height: '30px' }}
            />
          </motion.div>

          <p>Funayan Oji</p>
        </Stack>
      </motion.div>
      <Box display={{ mobile: 'none', tablet: 'flex' }}>
        <Navbarlinks />
      </Box>
      <Stack direction={{ mobile: 'column', phone: 'row' }} spacing={1}>
        <Themebutton themeMode={themeMode} setTheme={setTheme} />
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
        <Navbarlinks />
      </Popover>
    </Box>
  );
}

export default navbar;
