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
          <Typography variant="h3" align="center" color="textSecondary" noWrap>
            {data?.pokemon_species_details.length}
          </Typography>
        );
        break;

      case "list":
        return (
          <div className={classes.listContainer}>
            {data?.results.map((dataResult: { name: string }) => (
              <div className={classes.listItem}>
                <Typography variant="body1" color="textPrimary">
                  {dataResult?.name}
                </Typography>
              </div>
            ))}
          </div>
        );
        break;

      default:
        return <div>Unsupported widget type</div>;
        break;
    }
  };

  return (
    <Container
      disableGutters
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginTop: "5%",
      }}
    >
      {renderData()}
    </Container>
  );
}

export default WidgetContent;
