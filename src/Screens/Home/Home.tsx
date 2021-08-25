import { Grid } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

import WidgetContainer from "../../Components/WidgetContainer/WidgetContainer";
import { getSelectedClientConfig } from "../../Config/Config";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
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
    <Grid container className={classes.root}>
      {configData.columns.map((column) => (
        <WidgetContainer
          heading={column.heading}
          size={column.size}
          widgets={column.widgets}
        />
      ))}
    </Grid>
  );
}

export default Home;
