export function exerciseReducer(state: any = [], action: any) {
  switch (action.type) {
    case "GET_EXERCISE":
      return [...state, ...action.payload.data];
    case "CREATE_EXERCISE":
      return [...state, action.payload.data];
    case "UPDATE_EXERCISE":
      const newArray = state.filter((item: any) => item._id !== action.id);
      return [...newArray, action.payload];
    case "DELETE_EXERCISE":
      return state.filter((item: any) => item._id !== action.payload);
    default:
      return state;
  }
}
