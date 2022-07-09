import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// Mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Popover from '@mui/material/Popover';
// Motion Frame
import { motion } from 'framer-motion';
// Components
import Themebutton from '../themebutton/themebutton';
import Navbarlinks from '../navbarlinks/navbarlinks';
// Css Constants
import {
  cssText,
  cssBorders,
  colors,
  cssButton,
  cssMargins,
} from '../../cssConstants';
// Icons
import logo from '../../icons/Flag-map_of_Nigeria.svg.png';

const id = 'menu-popover';
const logoVariantChild = { hoverStart: { rotate: 360 } };
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
    <AppBar
      color="primary"
      position="sticky"
      sx={{
        padding: '.4rem .5rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1024px',
      }}
      ref={navbarRef}
      enableColorOnDark
    >
      <motion.div whileHover="hoverStart" variants={logoVariantParent}>
        <Link
          to="/"
          style={{
            fontFamily: cssText.fontFamilyPrimary,
            textDecoration: 'none',
            color: colors.commonWhite,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            columnGap: cssMargins.marginHalf,
          }}
        >
          <motion.div variants={logoVariantChild}>
            <img
              alt="naija flag logo"
              src={logo}
              style={{ width: '40px', height: '30px' }}
            />
          </motion.div>
          Funayan Oji
        </Link>
      </motion.div>
      <Box display={{ mobile: 'none', tablet: 'flex' }}>
        <Navbarlinks />
      </Box>
      <Stack direction={{ mobile: 'column', phone: 'row' }} spacing={1}>
        <Themebutton themeMode={themeMode} setTheme={setTheme} />
        <Button
          sx={{
            backgroundColor: '#f7f3f321',
            border: cssBorders.borderWhite1,
            padding: cssButton.padding,
            display: { tablet: 'none' },
          }}
          aria-describedby={id}
          onClick={handleClick}
        >
          {open ? (
            <CloseIcon
              sx={{
                color: colors.commonWhite,
              }}
            />
          ) : (
            <MenuIcon
              sx={{
                color: colors.commonWhite,
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
    </AppBar>
  );
}

export default navbar;
