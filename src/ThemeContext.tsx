import React, { useState, createContext, ReactElement } from 'react';
import { createMuiTheme, Theme } from '@material-ui/core';
import { blue, red, green, purple } from '@material-ui/core/colors';

interface ThemeContext {
  isDarkMode: boolean;
  setIsDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
  change: (b: boolean) => void;
  theme: Theme;
}

export const ThemeContext = createContext({} as ThemeContext);

interface Props {
  children: ReactElement;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const change = () => setIsDarkMode(!isDarkMode);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light',
      primary: isDarkMode ? purple : blue,
      secondary: isDarkMode ? green : red,
      background: { default: isDarkMode ? '#333' : '#eee' },
    },
  });

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        change,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
