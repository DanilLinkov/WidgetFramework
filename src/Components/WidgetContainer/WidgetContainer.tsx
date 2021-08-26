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
      backgroundColor: theme.palette.primary.main,
      padding: "10px",
      paddingLeft: "15px",
      paddingRight: "15px",
      borderRadius: "20px",
      border: "rgb(0,0,0,0.4) solid 2px",
      boxShadow: "3px 3px 11px 2px rgba(0,0,0,0.77)",
    },
    header: {
      marginLeft: "10px",
      marginBottom: "20px",
      fontSize: "1.3em",
    },
  })
);

function WidgetContainer(props: Props) {
  const classes = useStyles();

  const { column } = props;
  const { size, heading, widgets } = column;

  const containerGridSize: GridSize = (size * 3) as any;
  const itemGridSize: GridSize = (12 / size) as any;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={containerGridSize}
      style={{ minHeight: "100%" }}
    >
      <Container className={classes.widgetContainer} disableGutters>
        <Typography className={classes.header} variant="h6">
          {heading}
        </Typography>
        <Grid
          container
          alignItems="flex-start"
          justifyContent="flex-start"
          spacing={2}
        >
          {widgets.map((widget, index) => (
            <WidgetItem key={index} widget={widget} size={itemGridSize} />
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}

export default WidgetContainer;
