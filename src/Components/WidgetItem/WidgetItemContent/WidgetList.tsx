import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    numberStyle: {
      marginTop: "5%",
      fontSize: "3em",
    },
    listContainer: {
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      textAlign: "center",
      marginBottom: "5%",
    },
    listItem: {
      backgroundColor: theme.palette.primary.main,
      marginBottom: "3%",
      marginLeft: "7%",
      marginRight: "7%",
      boxSizing: "border-box",
      padding: "5px",
    },
  })
);

interface Props {
  data: any;
}

function WidgetList(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.listContainer} data-testid="list-test">
      {props.data?.map((listItemName: string, index: number) => (
        <div key={index} className={classes.listItem}>
          <Typography
            variant="body1"
            color="textPrimary"
            style={{ fontSize: "1.1em" }}
          >
            {listItemName}
          </Typography>
        </div>
      ))}
    </div>
  );
}

export default WidgetList;
