import React from "react";

import { Container, Typography } from "@material-ui/core";
import { supportedWidgets } from "../../../Util/Types";

interface Props {
  data: any;
  type: supportedWidgets;
}

function WidgetContent(props: Props) {
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
        return <div>Unsupported widget type</div>;
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
        marginTop: "15%",
      }}
    >
      {renderData()}
    </Container>
  );
}

export default WidgetContent;
