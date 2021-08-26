import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import Home from "./Screens/Home/Home";

function App() {
  const [darkState, setDarkState] = useState(true);

  const setDarkTheme = (value: boolean) => {
    setDarkState(value);

    value
      ? localStorage.setItem("savedTheme", "dark")
      : localStorage.setItem("savedTheme", "light");
  };

  useEffect(() => {
    const theme = localStorage.getItem("savedTheme");
    if (theme) {
      const themePreference = localStorage.getItem("savedTheme");
      if (themePreference === "dark") {
        setDarkTheme(true);
      } else {
        setDarkTheme(false);
      }
    } else {
      setDarkTheme(true);
    }
  }, []);

  const theme = createTheme({
    palette: {
      type: darkState ? "dark" : "light",
      primary: {
        main: darkState ? "#22252A" : "#FFFFFF",
        contrastText: darkState ? "rgb(255,255,255,0.4)" : "rgb(0,0,0,0.4)",
      },
      secondary: {
        main: darkState ? "#2D3035" : "#EBEBEB",
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
      <Home setDarkState={setDarkTheme} darkMode={darkState} />
    </ThemeProvider>
  );
}

export default App;
