import api from "../../services/api";

export const init = () => (dispatch: any) => {
  dispatch(fetchExercises());
  dispatch(fetchUsers());
};

/* EXERCISES */
export function getExercises(exercise: any) {
  return {
    type: "GET_EXERCISE",
    payload: exercise,
  };
}

export function deleteExercises(id: number) {
  return {
    type: "DELETE_EXERCISE",
    payload: id,
  };
}

export function createExercises(exercise: any) {
  return {
    type: "CREATE_EXERCISE",
    payload: exercise,
  };
}

export function updateExercises(id: string, exercise: any) {
  return {
    type: "UPDATE_EXERCISE",
    id,
    payload: exercise,
  };
}

export const orderStateExercise = () => (getState: any) => {
  let exercises = getState().exercises;

  exercises.sort((a: any, b: any) => {
    let nameA = a._id;
    let nameB = b._id;

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;

    return 0;
  });
};

export const fetchExercises = () => async (dispatch: any) => {
  try {
    const response = await api.get("/exercise");
    dispatch(getExercises(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewExercises = (exercise: any) => async (dispatch: any) => {
  try {
    const response = await api.post("/exercise", exercise);
    dispatch(createExercises(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchUpdatedExercises = (id: string, exercise: any) => async (
  dispatch: any
) => {
  try {
    await api.put(`/exercise/edit/${id}`, exercise);
    dispatch(updateExercises(id, exercise));
    dispatch(orderStateExercise());
  } catch (error) {
    console.log(error);
  }
};

export const fetchDeleteExercises = (id: number) => async (dispatch: any) => {
  try {
    await api.delete(`/exercise/${id}`);
    dispatch(deleteExercises(id));
  } catch (error) {
    console.log(error);
  }
};

/* END EXERCISES */

/* USERS */
export const getUsers = (users: any) => ({
  type: "GET_USERS",
  payload: users,
});

export const createUser = (user: any) => ({
  type: "CREATE_USER",
  payload: user,
});

export const fetchUsers = () => async (dispatch: any) => {
  try {
    const response = await api.get("/users");
    dispatch(getUsers(response.data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreateNewUser = (user: any) => async (dispatch: any) => {
  try {
    const response = await api.post("/users", { username: user });
    dispatch(createUser(response.data));
  } catch (error) {
    console.log(error);
  }
};

/* END USERS */
