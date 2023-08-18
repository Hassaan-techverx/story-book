export type UserType = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}[];

export type IUserState = {
  data: UserType | null;
  isLoading: boolean;
  errors: string;
};

export type UsersStateType = {
  user: IUserState;
};

export const USERS = "users";
export type USERS = typeof USERS; // Typescript line

export const GET_USER_BY_ID = `${USERS}/getUserAction`;
export type GET_USER_BY_ID = typeof GET_USER_BY_ID; // Typescript line
