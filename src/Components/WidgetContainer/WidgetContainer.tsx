import { Container, Grid, GridSize, Typography } from "@material-ui/core";
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
  const size: GridSize = (props.size * 3) as any;

  const test = {
    title: "Genderless count",
    type: "number",
    api: "https://pokeapi.co/api/v2/gender/3/",
  };

  return (
    <Grid item xs={size} style={{ height: "100%" }}>
      <Container className={classes.widgetContainer} disableGutters>
        <Typography className={classes.header} variant="h6">
          Header
        </Typography>
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <WidgetItem widget={test} />
          <WidgetItem widget={test} />
          <WidgetItem widget={test} />
          <WidgetItem widget={test} />
        </Grid>
        {/* <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          className={classes.widgetContainer}
        >
          {props.widgets.map((widget) => (
            <WidgetItem widget={widget} />
          ))}
        </Grid> */}
      </Container>
    </Grid>
  );
}

export default WidgetContainer;
