import React, { useEffect, useState, useReducer } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdatedExercises, updateExercises } from "../../store/actions";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Alert from "@material-ui/lab/Alert";
import ClearIcon from "@material-ui/icons/Clear";
import api from "../../services/api";
import { IUser, Interface } from "../ExerciseCreate";

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

function ExerciseEdit() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const classes = useStyles();
  let history = useHistory();
  const [error, setError] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const [userInput, setUserInput] = useReducer(
    (state: Interface, newState: Interface) => ({
      ...state,
      ...newState,
    }),
    {
      username: "",
      description: "",
      duration: "",
      date: selectedDate,
    }
  );

  useEffect(() => {
    const getExercise = async () => {
      try {
        const response = await api.get(`/exercise/${id}`);
        setUserInput({ ...response.data.data });
      } catch (error) {
        console.log(error);
      }
    };

    const getUser = async () => {
      try {
        const response = await api.get("/users");
        if (response.data.count >= 0) {
          setUsers(response.data.data.map((user: IUser) => user.username));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
    getExercise();
  }, []);

  const onHandleChange = (event: {
    target: { name?: string | undefined; value: any };
  }): void => {
    const { name, value } = event.target;
    setUserInput({ [name!]: value });
  };

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    if (!userInput) {
      setError(true);
      return;
    }
    setError(false);

    dispatch(fetchUpdatedExercises(id!, userInput));

    history.push("/");
  };

  const onReset = () => {
    setUserInput({
      username: "",
      description: "",
      duration: "",
      date: selectedDate,
    });
  };

  return (
    <section>
      <h2>Edit Exercise</h2>
      <form
        noValidate
        autoComplete="off"
        className={classes.root}
        onSubmit={onSubmit}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label">Username</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="username"
            required
            onChange={onHandleChange}
            value={userInput.username}
          >
            {users.sort().map((user, index) => (
              <MenuItem key={index} value={`${user}`}>
                {user}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <TextField
            id="standard-basic"
            label="Description"
            name="description"
            onChange={onHandleChange}
            value={userInput.description}
            required
          />
        </FormControl>

        <FormControl>
          <TextField
            id="standard-basic"
            label="Duration (in Min)"
            name="duration"
            type="number"
            required
            onChange={onHandleChange}
            value={userInput.duration}
          />
        </FormControl>

        <FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="dd/MM/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              name="date"
              required
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </FormControl>

        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          startIcon={<SaveIcon />}
        >
          Save Edit
        </Button>

        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          type="reset"
          onClick={onReset}
          startIcon={<ClearIcon />}
        >
          Reset All
        </Button>
        {error && <Alert severity="error">You have complete all fields</Alert>}
      </form>
    </section>
  );
}

export default ExerciseEdit;
