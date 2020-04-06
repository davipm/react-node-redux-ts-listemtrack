import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "#fff",
      textDecoration: "none",
    },
    toolbar: {
      padding: "0",
    },
  })
);

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar className={classes.toolbar}>
            <Typography
              variant="h6"
              className={classes.title}
              component={Link}
              to="/"
            >
              Exercise App
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Exercise
            </Button>
            <Button color="inherit" component={Link} to="/create">
              Create Exercise
            </Button>
            <Button color="inherit" component={Link} to="/users">
              Create User
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
