import React from "react";
import { Grid, CircularProgress, GridSize } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { widget } from "../../Util/Types";
import Header from "../Header/Header";
import WidgetContent from "./WidgetItemContent/WidgetContent";
import { useClientApiData } from "../../Hooks/useClientApiData";

interface Props {
  widget: widget;
  size: GridSize;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    widgetItemContainer: {
      minHeight: "200px",
      borderRadius: "30px",
      backgroundColor: theme.palette.secondary.main,
    },
    loadingContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "50px",
    },
  })
);

/**
 * Renders a grid item with a header and widget content
 * Also fetches data which is passed into the widget content
 * using a custom hook
 */
function WidgetItem(props: Props) {
  const classes = useStyles();
  const { widget, size } = props;

  const { data, isLoading } = useClientApiData(widget.api, widget.type);

  return (
    <Grid
      item
      sm={12}
      md={size < 12 ? 6 : 12}
      lg={size}
      style={{ width: "100%", padding: "8px" }}
    >
      <div className={classes.widgetItemContainer}>
        <Header title={widget.title} subtitle={widget.subtitle} />
        {isLoading ? (
          <div className={classes.loadingContainer}>
            <CircularProgress size={40} />
          </div>
        ) : (
          <WidgetContent data={data} type={widget.type} />
        )}
      </div>
    </Grid>
  );
}

export default WidgetItem;
