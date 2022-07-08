import React, { useMemo } from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { motion, AnimatePresence } from 'framer-motion';
import { colors } from '../../cssConstants';
// Styled Elements
import { ThemeButton } from './styledElements';

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
        <ThemeButton
          onClick={() => setTheme(themeMode === 'light' ? 'dark' : 'light')}
          variant="contained"
        >
          {themeMode === 'light' ? (
            <DarkModeIcon
              sx={{
                color: colors.commonWhite,
              }}
            />
          ) : (
            <LightModeIcon sx={{ color: '#1A202C' }} />
          )}
        </ThemeButton>
      </motion.div>
    </AnimatePresence>
  );
}

export default themebutton;
