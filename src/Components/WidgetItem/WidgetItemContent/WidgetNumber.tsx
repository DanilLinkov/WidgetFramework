import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    numberStyle: {
      marginTop: "5%",
      fontSize: "3em",
    },
  })
);

interface Props {
  data: any;
}

function WidgetNumber(props: Props) {
  const classes = useStyles();

  return (
    <Typography
      variant="h3"
      align="center"
      color="textPrimary"
      noWrap
      data-testid="number-test"
      className={classes.numberStyle}
    >
      {props.data}
    </Typography>
  );
}

export default WidgetNumber;
