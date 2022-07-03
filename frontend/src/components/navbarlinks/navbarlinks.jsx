import { React } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { cssText } from '../../cssConstants';

const PopupLinks = styled('a')(
  ({
    theme: {
      palette: { text },
    },
  }) => `
  font-family: ${cssText.fontFamilySecondary};
  color: ${text.primary};
  margin: 0rem;
  padding: .5rem;
  text-underline-offset: .2rem;
  cursor: pointer;
  :hover {
    color: white;
    text-decoration: underline;
    box-shadow: 0 0 0 5px rgba(66, 153, 225, 0.6);`
);
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
        <Link style={{ textDecoration: 'none' }} to="/">
          <PopupLinks>Posts</PopupLinks>{' '}
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/">
          <PopupLinks>View Source</PopupLinks>{' '}
        </Link>
      </Stack>
    </Box>
  );
}

export default navbarlinks;
