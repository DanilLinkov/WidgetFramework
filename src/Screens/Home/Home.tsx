import React from "react";
import { Grid, Switch, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import WidgetContainer from "../../Components/WidgetContainer/WidgetContainer";
import { getSelectedClientConfig } from "../../Config/config";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      paddingLeft: "30px",
      paddingRight: "30px",
      minHeight: "100%",
      boxSizing: "border-box",
    },
    containerGrid: {},
    toggleContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      paddingTop: "10px",
      paddingBottom: "5px",
      marginRight: "3%",
    },
  })
);

interface Props {
  setDarkState: (value: boolean) => void;
  darkMode: boolean;
}

/**
 * Puts everything together and displays the Home screen
 *
 * contains dark theme logic implemented for fun
 */
function Home(props: Props) {
  const classes = useStyles();
  const { clientConfig } = getSelectedClientConfig();

  const { darkMode, setDarkState } = props;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.toggleContainer}>
        <Switch
          checked={darkMode}
          onChange={() => setDarkState(!darkMode)}
          color="default"
        />
        <Typography>Toggle darkmode</Typography>
      </div>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        className={classes.containerGrid}
      >
        {clientConfig.columns.map((column, index) => (
          <WidgetContainer key={index} column={column} />
        ))}
      </Grid>
    </div>
  );
}

export default Home;
