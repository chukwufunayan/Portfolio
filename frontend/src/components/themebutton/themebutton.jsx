import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Button from '@mui/material/Button';
import { motion, AnimatePresence } from 'framer-motion';

function themebutton({ themeMode, setTheme }) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={themeMode}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          sx={{
            backgroundColor: (theme) =>
              themeMode === 'dark'
                ? theme.palette.warning.light
                : theme.palette.secondary.light,
            padding: '.75rem .45rem',
          }}
          onClick={() => setTheme(themeMode === 'light' ? 'dark' : 'light')}
        >
          {themeMode === 'dark' ? (
            <LightModeIcon sx={{ color: '#1A202C' }} />
          ) : (
            <DarkModeIcon
              sx={{
                color: '#E2E8F0',
              }}
            />
          )}
        </Button>
      </motion.div>
    </AnimatePresence>
  );
}

export default themebutton;
