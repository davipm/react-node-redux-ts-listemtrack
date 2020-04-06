import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import api from "../../services/api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
    button: {
      width: "auto",
    },
  })
);

function CreateUser() {
  const classes = useStyles();
  const [username, setUsername] = useState<string>("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username) return;
    const user = {
      username,
    };

    try {
      await api.post("/users", user);
    } catch (error) {
      console.log(error);
    }

    setUsername("");
  }

  return (
    <section>
      <h2>Create new user</h2>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField id="standard-basic" label="Username" />

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
        >
          Save user
        </Button>
      </form>
    </section>
  );
}

export default CreateUser;
