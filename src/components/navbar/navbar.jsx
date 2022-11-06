import React, { useState, useRef } from 'react';
// Mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Popover from '@mui/material/Popover';
// Motion Frame
import { motion } from 'framer-motion';
// Components
import Themebutton from './themebutton/themebutton';
import Navbarlinks from './navbarlinks/navbarlinks';
// Css Constants
import { colors } from '../../util/cssConstants';
// Styled Elements
import { AppBarStyled, LinkStyled, ButtonStyled } from './styledElements';
// Icons
import logo from '../../resources/icons/Flag-map_of_Nigeria.svg.png';

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
    <AppBarStyled
      color="primary"
      position="sticky"
      ref={navbarRef}
      enableColorOnDark
    >
      <motion.div whileHover="hoverStart" variants={logoVariantParent}>
        <LinkStyled to="/">
          <motion.div variants={logoVariantChild}>
            <img
              alt="naija flag logo"
              src={logo}
              style={{ width: '40px', height: '30px' }}
            />
          </motion.div>
          Funayan Oji
        </LinkStyled>
      </motion.div>
      <Box display={{ mobile: 'none', tablet: 'block' }}>
        <Navbarlinks />
      </Box>
      <Stack direction={{ mobile: 'column', phone: 'row' }} spacing={1}>
        <Themebutton themeMode={themeMode} setTheme={setTheme} />
        <ButtonStyled aria-describedby={id} onClick={handleClick}>
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
        </ButtonStyled>
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
        variant="navbarPortable"
      >
        <Navbarlinks />
      </Popover>
    </AppBarStyled>
  );
}

export default navbar;
