import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

import { fetchCreateNewUser } from "../../store/actions";

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
  const dispatch = useDispatch();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!username) return;

    dispatch(fetchCreateNewUser(username));

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
        <TextField
          id="standard-basic"
          label="Username"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          startIcon={<SaveIcon />}
        >
          Save user
        </Button>
      </form>
    </section>
  );
}

export default CreateUser;
