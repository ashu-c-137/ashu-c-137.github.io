import React from 'react';
import { motion } from 'framer-motion';
import useThemeStore from '../store/themeStore';

const ThemeToggle = () => {
  const { isDev, toggleDevMode } = useThemeStore();

  return (
    <div className="theme-toggle-container">
      <motion.button
        className={`theme-toggle ${isDev ? 'dev-mode' : ''}`}
        onClick={toggleDevMode}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        {isDev ? '⚡ Exit Dev Mode' : '⚡ Enter Dev Mode'}
      </motion.button>
    </div>
  );
};

export default ThemeToggle;