import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import { deepOrange, deepPurple, grey, teal } from "@mui/material/colors";
import React from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import AppRouter from "./router/AppRouter";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#dc143c",
          },
          secondary: {
            main: teal[700],
          },
          morcivert: {
            main: deepPurple["A200"],
            light: deepPurple["A100"],
            dark: "#dc143c",
          },
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#060606",
          },
          secondary: {
            main: "#3f3f3f",
          },
          morcivert: {
            main: "#00000",
            light: deepPurple["A100"],
            dark: deepPurple["A400"],
          },
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
      <ErrorBoundary> 
      <AppRouter />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
