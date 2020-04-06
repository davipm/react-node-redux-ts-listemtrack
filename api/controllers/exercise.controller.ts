import { Request, Response } from "express";
import Exercise from "../models/exercise.model";

class ExerciseController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const exercise = await Exercise.find();
      return res.status(200).json({
        success: true,
        count: exercise.length,
        data: exercise,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }

  public async newExercise(req: Request, res: Response): Promise<Response> {
    try {
      const { username, description, duration, date } = req.body;
      const exercise = await Exercise.create({
        username,
        description,
        duration,
        date: Date.parse(date),
      });
      return res.status(200).json({
        success: true,
        data: exercise,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }

  public async findExercise(req: Request, res: Response): Promise<Response> {
    try {
      const exercise = await Exercise.findById(req.params.id);
      return res.status(200).json({
        success: true,
        data: exercise,
      });
    } catch (error) {
      return res.status(404).json({
        success: false,
        error: "Not Found",
      });
    }
  }

  public async deleteExercise(req: Request, res: Response): Promise<Response> {
    try {
      await Exercise.findByIdAndDelete(req.params.id);
      return res.status(200).json({
        success: true,
        data: {
          message: "Exercise Deleted",
        },
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }

  public async updateExercise(req: Request, res: Response): Promise<Response> {
    try {
      await Exercise.findById(req.params.id);
      return res.status(200).json({
        success: true,
        data: {
          message: "Exercise Updated",
        },
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
}

export default new ExerciseController();
