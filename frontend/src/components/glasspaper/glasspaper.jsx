import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { cssPadding } from '../../cssConstants';

function glasspaper({ children }) {
  return (
    <Paper
      variant="glass"
      sx={{
        width: '95%',
        margin: 'auto',
        padding: cssPadding.padding2xl,
      }}
    >
      <Box maxWidth="840px" margin="auto">
        {children}
      </Box>
    </Paper>
  );
}

export default glasspaper;
