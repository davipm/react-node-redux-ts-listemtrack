import React, { useState, useEffect } from "react";
import api from "../../services/api";

import { IExercise } from "../ExerciseList";

function ExerciseEdit() {
  const [username, setUsername] = useState<string>("");
  const [users, setUsers] = useState<IExercise[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = api.get("/users");
      } catch (error) {}
    };
  }, []);

  return (
    <section>
      <h2>Exercise Edit</h2>
    </section>
  );
}

export default ExerciseEdit;
