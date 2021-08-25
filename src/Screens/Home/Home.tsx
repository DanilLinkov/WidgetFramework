import React from "react";
import { Container, Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import WidgetContainer from "../../Components/WidgetContainer/WidgetContainer";
import { getSelectedClientConfig } from "../../Config/Config";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      padding: "20px",
      height: "100%",
      boxSizing: "border-box",
    },
    control: {
      padding: theme.spacing(2),
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
        style={{ height: "100%" }}
      >
        {configData.columns.map((column) => (
          <WidgetContainer column={column} />
        ))}
      </Grid>
    </div>
  );
}

export default Home;
