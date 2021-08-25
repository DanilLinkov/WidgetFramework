import { Container, Typography } from "@material-ui/core";
import React from "react";

function WidgetContent() {
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
      <Typography variant="h3" align="center" color="textSecondary" noWrap>
        1998
      </Typography>
    </Container>
  );
}

export default WidgetContent;
