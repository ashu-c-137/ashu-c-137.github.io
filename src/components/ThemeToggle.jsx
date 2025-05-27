import React from 'react';
import { motion } from 'framer-motion';
import useThemeStore from '../store/themeStore';

const ThemeToggle = () => {
  const { isDev, toggleDevMode } = useThemeStore();

  return (
    <motion.button
      className={`theme-toggle ${isDev ? 'dev-mode' : ''}`}
      onClick={toggleDevMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDev ? '> exit dev_mode' : '> enter dev_mode'}
    </motion.button>
  );
};

export default ThemeToggle;