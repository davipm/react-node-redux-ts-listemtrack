import api from "../../services/api";

// init
export const init = () => (dispatch: any) => {
  dispatch(fetchExercises());
  dispatch(fetchUsers());
};

/* EXERCISES */
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
    dispatch({
      type: "GET_EXERCISE",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewExercises = (exercise: any) => async (dispatch: any) => {
  try {
    const response = await api.post("/exercise", exercise);
    dispatch({
      type: "CREATE_EXERCISE",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchUpdatedExercises = (id: string, exercise: any ) => async (dispatch: any) => {
  try {
    await api.patch(`/exercise/edit/${id}`, exercise);
    dispatch({
      type: "UPDATE_EXERCISE",
      id,
      payload: exercise,
    });
    dispatch(orderStateExercise());
  } catch (error) {
    console.log(error);
  }
};

export const fetchDeleteExercises = (id: number) => async (dispatch: any) => {
  try {
    await api.delete(`/exercise/${id}`);
    dispatch({
      type: "DELETE_EXERCISE",
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

/* END EXERCISES */

/* USERS */
export const fetchUsers = () => async (dispatch: any) => {
  try {
    const response = await api.get("/users");
    dispatch({
      type: "GET_USERS",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchCreateNewUser = (user: any) => async (dispatch: any) => {
  try {
    const response = await api.post("/users", { username: user });
    dispatch({
      type: "CREATE_USER",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
/* END USERS */
