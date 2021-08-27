import React from "react";
import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

import { supportedWidgets } from "../../../Util/Types";
import WidgetNumber from "./WidgetNumber";
import WidgetList from "./WidgetList";

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
  })
);

/**
 * Renders the widget content based on the type of the widget
 *
 * Each widget content type was placed in its seperate component as it
 * can be then reused in multiple components for example if we wanted to
 * make a WidgetNumberList type where both number and list are used
 *
 * This is also cleaner and easier to maintain
 */
function WidgetContent(props: Props) {
  const classes = useStyles();
  const { data, type } = props;

  /**
   * This way we could very easily change how a type is rendered
   * as we would only need to change it in one place and we could
   * also render multiple things under one type
   *
   * e.g.
   * NumberList:
   *
   * <div>
   *   <WidgetNumber data={data} />
   *   <WidgetList data={data} />
   * </div>
   */
  const renderData = () => {
    switch (type) {
      case "number":
        return <WidgetNumber data={data} />;
      case "list":
        return <WidgetList data={data} />;
      default:
        return renderUnsupportedType();
    }
  };

  const renderUnsupportedType = () => {
    return (
      <Typography
        variant="body1"
        color="textSecondary"
        data-testid="unsupported-test"
      >
        Unsupported widget type
      </Typography>
    );
  };

  return (
    <Container disableGutters className={classes.mainContainer}>
      {renderData()}
    </Container>
  );
}

export default WidgetContent;
