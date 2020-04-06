import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
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

function ExerciseCreate() {
  const classes = useStyles();

  return (
    <section>
      <h2>Create Exercise</h2>
      <form noValidate autoComplete="off" className={classes.root}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Username</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <TextField id="standard-basic" label="Username" />
        </FormControl>

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
        >
          Save Exercise
        </Button>
      </form>
    </section>
  );
}

export default ExerciseCreate;
