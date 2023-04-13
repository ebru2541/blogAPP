import { createTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#009688",
      light: "#fafafa",
    },
    secondary: {
      main: "#009688",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#d84315",
    },
    secondary: {
      main: "#4dabf5",
    },
    background: {
      default: "#08154c",
      paper: "#546e7a",
    },
    info: {
      main: "#616161",
    },
  },
});

export { lightTheme, darkTheme };
