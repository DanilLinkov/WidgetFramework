import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import Home from "./Screens/Home/Home";

function App() {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";

  const theme = createTheme({
    palette: {
      type: palletType,
      primary: {
        main: darkState ? "#22252A" : "#FFFFFF",
        contrastText: darkState ? "rgb(255,255,255,0.4)" : "rgb(0,0,0,0.4)",
      },
      secondary: {
        main: darkState ? "#2D3035" : "#F7F7F7",
      },
      text: {
        primary: darkState ? "#FFFFFF" : "#212121",
        secondary: darkState ? "#9D9EA0" : "#7E7E7E",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home setDarkState={setDarkState} darkMode={darkState} />
    </ThemeProvider>
  );
}

export default App;
