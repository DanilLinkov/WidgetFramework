import React, { useEffect, useState } from "react";
import { Grid, CircularProgress, GridSize } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { widget } from "../../Util/Types";
import Header from "../Header/Header";
import WidgetContent from "./WidgetItemContent/WidgetContent";

interface Props {
  widget: widget;
  size: GridSize;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    widgetItemContainer: {
      minHeight: "200px",
      borderRadius: "30px",
      backgroundColor: "white",
    },
    loadingContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "50px",
    },
  })
);

function WidgetItem(props: Props) {
  const classes = useStyles();
  const { widget, size } = props;

  // put into a react hook later
  const [data, setData] = useState<any>({});
  const [isLoading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    async function fetchData() {
      return await fetch(widget.api)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }

    fetchData();
  }, [widget.api]);

  return (
    <Grid item xs={size}>
      <div className={classes.widgetItemContainer}>
        <Header title={widget.title} subtitle={widget.subtitle} />
        {isLoading ? (
          <div className={classes.loadingContainer}>
            <CircularProgress size={30} />
          </div>
        ) : (
          <WidgetContent data={data} type={widget.type} />
        )}
      </div>
    </Grid>
  );
}

export default WidgetItem;
