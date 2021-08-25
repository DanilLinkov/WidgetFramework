import { Grid, Typography, Container } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import Header from "../Header/Header";
import WidgetContent from "./WidgetItemContent/WidgetContent";

type widget = {
  title: string;
  subtitle?: string;
  type: string;
  api: string;
};

interface Props {
  widget: widget;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    widgetItemContainer: {
      height: "250px",
      width: "250px",
      borderRadius: "30px",
      backgroundColor: "white",
    },
  })
);

function WidgetItem(props: Props) {
  const classes = useStyles();

  return (
    <Grid item>
      <div className={classes.widgetItemContainer}>
        <Header title={props.widget.title} subtitle={props.widget.subtitle} />
        <WidgetContent />
      </div>
    </Grid>
  );
}

export default WidgetItem;
