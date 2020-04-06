import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import api from "../../services/api";
import ExerciseItem from "./ExerciseItem";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export interface IExercise {
  username: string;
  description: string;
  duration: number;
  date: Date;
  _id: string;
  deleteExercise?: (id: string) => void;
}

function ExerciseList() {
  const classes = useStyles();
  const [exercise, setExercise] = useState<IExercise[]>([]);

  useEffect(() => {
    const getExercise = async () => {
      try {
        const response = await api.get("/exercise");
        setExercise(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getExercise();
  }, []);

  const deleteExercise = async (id: string) => {
    await api.delete(`/exercise/${id}`);
    setExercise(exercise.filter(({ _id }) => _id !== id));
  };

  return (
    <section>
      <h2>Logged Exercise</h2>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Duration (min)</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exercise.map((item) => (
              <ExerciseItem
                key={item._id}
                deleteExercise={deleteExercise}
                {...item}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

export default ExerciseList;
