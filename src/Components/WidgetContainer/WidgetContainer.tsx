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
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);

function WidgetContainer(props: Props) {
  const size: GridSize = (props.size * 3) as any;

  return (
    <Grid item xs={size}>
      <Typography>Header</Typography>
      <Grid container item justifyContent="flex-start" alignItems="center">
        {props.widgets.map((widget) => (
          <WidgetItem />
        ))}
      </Grid>
    </Grid>
  );
}

export default WidgetContainer;
