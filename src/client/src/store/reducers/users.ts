export function usersReducer(state: any = [], action: any) {
  switch (action.type) {
    case "GET_USERS":
      return [...state, ...action.payload.data];
    case "CREATE_USER":
      return [...state, action.payload.data];
    default:
      return state;
  }
}
