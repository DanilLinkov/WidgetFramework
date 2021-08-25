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
      borderBottom: "rgb(231,231,231,0.7) 2px solid",
      padding: "12px",
    },
  })
);

function Header(props: Props) {
  const classes = useStyles();

  return (
    <Container disableGutters={true} className={classes.headerContainer}>
      <Typography variant="h6" align="center" style={{ fontSize: "1.1em" }}>
        {props.title}
      </Typography>
      <Typography
        variant="subtitle2"
        align="center"
        color="textSecondary"
        noWrap
        style={{ fontSize: "0.9em" }}
      >
        {props.subtitle}
      </Typography>
    </Container>
  );
}

export default Header;
