import { React } from 'react';
import { Link } from 'react-router-dom';
// Mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
// Styled Elements
import { PopupLinks, PopupLinksParagraph } from './styledElements';

function navbarlinks() {
  return (
    <Box sx={{ minWidth: '14rem' }}>
      <Stack
        direction={{ mobile: 'column', tablet: 'row' }}
        alignItems={{ tablet: 'center' }}
        sx={{ padding: '.45rem .25rem' }}
        spacing={{ tablet: 2 }}
      >
        <Link style={{ textDecoration: 'none' }} to="/">
          <PopupLinksParagraph>About</PopupLinksParagraph>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="experience">
          <PopupLinksParagraph>Experience</PopupLinksParagraph>
        </Link>
        {/* <Link style={{ textDecoration: 'none' }} to="/"> */}
        {/*  <PopupLinks>Posts</PopupLinks>{' '} */}
        {/* </Link> */}
        <PopupLinks
          href="https://github.com/chukwufunayan/Portfolio/"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon sx={{ verticalAlign: 'bottom' }} />
          View Source
        </PopupLinks>{' '}
      </Stack>
    </Box>
  );
}

export default navbarlinks;
