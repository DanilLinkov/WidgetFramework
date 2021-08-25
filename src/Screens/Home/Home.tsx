import React from "react";
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import WidgetContainer from "../../Components/WidgetContainer/WidgetContainer";
import { getSelectedClientConfig } from "../../Config/Config";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      padding: "20px",
      minHeight: "100%",
      boxSizing: "border-box",
    },
    containerGrid: {
      marginLeft: "2px",
    },
  })
);

function Home() {
  const classes = useStyles();
  const configData = getSelectedClientConfig();

  return (
    <div className={classes.mainContainer}>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        className={classes.containerGrid}
      >
        {configData.columns.map((column) => (
          <WidgetContainer column={column} />
        ))}
      </Grid>
    </div>
  );
}

export default Home;
