import React from "react";
import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

import { supportedWidgets } from "../../../Util/Types";

interface Props {
  data: any;
  type: supportedWidgets;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      marginTop: "5%",
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

function WidgetContent(props: Props) {
  const classes = useStyles();
  const { data, type } = props;

  const renderData = () => {
    switch (type) {
      case "number":
        return (
          <Typography
            variant="h3"
            align="center"
            color="textPrimary"
            noWrap
            style={{ marginTop: "5%", fontSize: "3em" }}
          >
            {data}
          </Typography>
        );

      case "list":
        return (
          <div className={classes.listContainer}>
            {data?.map((listItemName: string) => (
              <div className={classes.listItem}>
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

      default:
        return (
          <Typography variant="body1" color="textSecondary">
            Unsupported widget type
          </Typography>
        );
    }
  };

  return (
    <Container disableGutters className={classes.mainContainer}>
      {renderData()}
    </Container>
  );
}

export default WidgetContent;
