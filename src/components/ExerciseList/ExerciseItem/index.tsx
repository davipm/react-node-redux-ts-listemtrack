import React from "react";
import { Link } from "react-router-dom";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { IExercise } from "../index";

function ExerciseItem({
  username,
  description,
  duration,
  date,
  deleteExercise,
  _id,
}: IExercise) {
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {username}
      </TableCell>
      <TableCell align="right">{description}</TableCell>
      <TableCell align="right">{duration}</TableCell>
      <TableCell align="right">{date}</TableCell>
      <TableCell align="right">
        <Button
          className="mr-2"
          variant="contained"
          color="primary"
          component={Link}
          to={`/exercise/update/${_id}`}
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={(event) => {
            event.preventDefault();
            deleteExercise?.(_id);
          }}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default ExerciseItem;
