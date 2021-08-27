import React from "react";
import { Grid, GridSize, Typography } from "@material-ui/core";
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

  const generateItemInGrid = () => {
    let output = [];

    for (let i = 0; i < size; i++) {
      let column: any = [];

      let row = 0;

      widgets.forEach((w, wIndex) => {
        if (wIndex - size * row === i) {
          column.push(<WidgetItem key={wIndex} widget={w} size={12} />);
        }

        if ((wIndex + 1) % size === 0) {
          row++;
        }
      });

      output.push(column);
    }

    return output;
  };

  let cols = generateItemInGrid();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={6}
      lg={containerGridSize}
      style={{ minHeight: "100%" }}
    >
      <div className={classes.widgetContainer}>
        <Typography
          className={classes.header}
          variant="h6"
          data-testid="test-header"
        >
          {heading}
        </Typography>
        {column.fillGap !== undefined && !column.fillGap ? (
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
        ) : (
          <Grid
            container
            direction="row"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            {[...Array(size)].map((x, i) => (
              <Grid
                key={i}
                container
                item
                alignItems="center"
                justifyContent="center"
                direction="column"
                sm={12}
                md={size > 1 ? 6 : 12}
                lg={itemGridSize}
              >
                {cols[i]}
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </Grid>
  );
}

export default WidgetContainer;
