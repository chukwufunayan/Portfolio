import { React } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const PopupLinks = styled('p')({
  margin: '0rem',
  padding: '.5rem',
  textUnderlineOffset: '.2rem',
  ':hover': {
    color: 'white',
    textDecoration: 'underline',
    boxShadow: '0 0 0 5px rgba(66, 153, 225, 0.6);',
  },
});
function navbarpopupbox() {
  return (
    <Box sx={{ minWidth: '14rem' }}>
      <Stack sx={{ padding: '.45rem .25rem' }}>
        <PopupLinks>About</PopupLinks>
        <PopupLinks>Works</PopupLinks>
        <PopupLinks>Post</PopupLinks>
        <PopupLinks>View Source</PopupLinks>
      </Stack>
    </Box>
  );
}

export default navbarpopupbox;
