import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // change to "dark" later if needed
    primary: {
      main: "#6366F1",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif, DevAddict",
  },
});

export default theme;
