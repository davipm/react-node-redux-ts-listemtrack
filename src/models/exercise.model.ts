import { Schema, model, Document } from "mongoose";

interface IExercise extends Document {
  username: string;
  description: string;
  duration: number;
  date: Date;
}

const ExerciseModel = new Schema(
  {
    username: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IExercise>("Exercise", ExerciseModel);
