import { Router } from "express";
import ExerciseController from "../controllers/exercise.controller";

const routes = Router();

routes.get("/exercise", ExerciseController.index);
routes.post("/exercise", ExerciseController.newExercise);
routes.get("/exercise/:id", ExerciseController.findExercise);
routes.delete("/exercise/:id", ExerciseController.deleteExercise);
routes.patch("/exercise/edit/:id", ExerciseController.updateExercise);

export default routes;
