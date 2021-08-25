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
      backgroundColor: "#F8F8F8",
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
            color="textSecondary"
            noWrap
            style={{ marginTop: "5%", fontSize: "3em" }}
          >
            {data?.pokemon_species_details.length}
          </Typography>
        );

      case "list":
        return (
          <div className={classes.listContainer}>
            {data?.results.map((dataResult: { name: string }) => (
              <div className={classes.listItem}>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  style={{ fontSize: "1.1em" }}
                >
                  {dataResult?.name}
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
