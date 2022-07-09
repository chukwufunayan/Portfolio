import { React } from 'react';
import { Link } from 'react-router-dom';
// Mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
import { PopupLinks } from './styledElements';

function navbarlinks() {
  return (
    <Box sx={{ minWidth: '14rem' }}>
      <Stack
        direction={{ mobile: 'column', tablet: 'row' }}
        sx={{ padding: '.45rem .25rem' }}
        spacing={{ tablet: 2 }}
      >
        <Link style={{ textDecoration: 'none' }} to="/">
          <PopupLinks>About</PopupLinks>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="experience">
          <PopupLinks>Experience</PopupLinks>
        </Link>
        {/* <Link style={{ textDecoration: 'none' }} to="/"> */}
        {/*  <PopupLinks>Posts</PopupLinks>{' '} */}
        {/* </Link> */}
        <Link style={{ textDecoration: 'none' }} to="/">
          <PopupLinks>
            <GitHubIcon sx={{ verticalAlign: 'bottom' }} />
            View Source
          </PopupLinks>{' '}
        </Link>
      </Stack>
    </Box>
  );
}

export default navbarlinks;
