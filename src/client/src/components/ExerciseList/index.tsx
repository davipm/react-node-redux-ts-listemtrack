import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDeleteExercises } from "../../store/actions";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
  const dispatch = useDispatch();
  const exercise = useSelector((state: any) => state.exercises);

  exercise.sort((a: IExercise, b: IExercise) => {
    let nameA = a._id;
    let nameB = b._id;

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    return 0;
  });

  const deleteExercise = async (id: number) => {
    dispatch(fetchDeleteExercises(id));
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
            {exercise.map((item: any) => (
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
