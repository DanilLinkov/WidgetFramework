import React from "react";
import {
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

interface Props {
  title: string;
  subtitle?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerContainer: {
      borderBottom: "2px solid",
      borderBottomColor: theme.palette.primary.contrastText,
      padding: "12px",
    },
  })
);

/**
 * Basic header which is used in WidgetItem
 * Supports a title and subtitle
 */
function Header(props: Props) {
  const classes = useStyles();

  return (
    <Container disableGutters={true} className={classes.headerContainer}>
      <Typography
        variant="h6"
        align="center"
        style={{ fontSize: "1.1em", marginBottom: "2px" }}
        data-testid="header-title"
      >
        {props.title}
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        color="textSecondary"
        noWrap
        style={{ fontSize: "0.9em" }}
        data-testid="header-subtitle"
      >
        {props.subtitle}
      </Typography>
    </Container>
  );
}

export default Header;
