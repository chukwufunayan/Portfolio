import { React } from 'react';
// Mui
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import GitHubIcon from '@mui/icons-material/GitHub';
// Styled Elements
import { LinkStyled, PopupLinksParagraph, PopupLinks } from './styledElements';

function navbarlinks() {
  return (
    <Box sx={{ minWidth: '14rem' }}>
      <Stack
        direction={{ mobile: 'column', tablet: 'row' }}
        alignItems={{ tablet: 'center' }}
        sx={{ padding: '.45rem .25rem' }}
        spacing={{ tablet: 2 }}
      >
        <LinkStyled to="/">
          <PopupLinksParagraph>About</PopupLinksParagraph>
        </LinkStyled>
        <LinkStyled to="experience">
          <PopupLinksParagraph>Experience</PopupLinksParagraph>
        </LinkStyled>
        {/* <LinkStyled  to="/"> */}
        {/*  <PopupLinks>Posts</PopupLinks>{' '} */}
        {/* </LinkStyled> */}
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
