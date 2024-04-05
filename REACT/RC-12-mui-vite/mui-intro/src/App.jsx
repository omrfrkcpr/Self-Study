// import Home from "./pages/Home";
import Products from "./pages/Products";
import { createTheme, ThemeProvider } from "@mui/material";
import {teal,deepPurple} from "@mui/material/colors"

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#dc143c",
      },
      secondary: {
        main: teal[700],
      },
      morcivert: {
        main: deepPurple["A200"],
        light: deepPurple["A100"],
        dark: deepPurple["A400"],
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 800,
        lg: 1200,
        xl: 1536,
      },
    },
  });//default değerleri customize edebiliriz

  return (
    <ThemeProvider theme={theme}>
      {/* <Home/> */}
      <Products />
    </ThemeProvider>
  );
}

export default App;
