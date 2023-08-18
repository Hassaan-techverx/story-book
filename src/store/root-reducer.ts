import { usersReducer } from "../container/users/slice";
import { UsersStateType } from "../container/users/types";

export type StateType = {
  // Reducers types here
  users: UsersStateType;
};

const rootReducers = {
  // Reducers here
  users: usersReducer,
};

export default rootReducers;
