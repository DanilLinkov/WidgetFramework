import { Grid, GridSize, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import WidgetItem from "../WidgetItem/WidgetItem";

type widget = {
  title: string;
  subtitle?: string;
  type: string;
  api: string;
};

interface Props {
  heading: string;
  size: number;
  widgets: widget[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    widgetContainer: {},
  })
);

function WidgetContainer(props: Props) {
  const classes = useStyles();
  const size: GridSize = (props.size * 3) as any;

  return (
    <Grid item xs={size}>
      <Typography>Header</Typography>
      <Grid
        container
        justifyContent="flex-start"
        alignItems="center"
        className={classes.widgetContainer}
      >
        {props.widgets.map((widget) => (
          <WidgetItem widget={widget} />
        ))}
      </Grid>
    </Grid>
  );
}

export default WidgetContainer;
