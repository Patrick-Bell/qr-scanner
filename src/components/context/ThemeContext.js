import React, { createContext, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
  import "@fontsource/poppins"; // Add the Poppins font

const theme = createTheme({
  palette: {
    primary: {
      main: "#5271FF", // Custom main color
    },
    secondary: {
      main: "#f50057", // You can set the secondary color if needed
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif", // Apply Poppins font globally
    h1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
    },
    h2: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
    },
    h3: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
    },
    h5: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
    },
    h6: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
    },
    body1: {
      fontFamily: "Poppins, sans-serif",
    },
    body2: {
      fontFamily: "Poppins, sans-serif",
    },
    button: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: "Poppins, sans-serif",
    },
    subtitle2: {
      fontFamily: "Poppins, sans-serif",
    },
  },
});

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProviderWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ThemeContext.Provider value={{ theme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
