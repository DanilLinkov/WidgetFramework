import React from "react";
import { Container, Grid, GridSize, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { column } from "../../Util/Types";
import WidgetItem from "../WidgetItem/WidgetItem";

interface Props {
  column: column;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    widgetContainer: {
      backgroundColor: "#F3F7FA",
      minHeight: "100%",
      padding: "10px",
    },
    header: {
      marginLeft: "10px",
      marginBottom: "20px",
    },
  })
);

function WidgetContainer(props: Props) {
  const classes = useStyles();

  const { column } = props;
  const { size, heading, widgets } = column;

  const gridSize: GridSize = (size * 3) as any;

  return (
    <Grid item xs={gridSize} style={{ height: "100%" }}>
      <Container className={classes.widgetContainer} disableGutters>
        <Typography className={classes.header} variant="h6">
          {heading}
        </Typography>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          {widgets.map((widget) => (
            <WidgetItem widget={widget} />
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}

export default WidgetContainer;
