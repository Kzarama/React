import { ADD_USER, UPDATE_USER, DELETE_USER } from "./index";

export const addUser = (newUser) => {
  return {
    type: ADD_USER,
    payload: newUser,
  };
};

export const updateUser = (User) => {
  return {
    type: UPDATE_USER,
    payload: User,
  };
};

export const deleteUser = (UserId) => {
  return {
    type: DELETE_USER,
    payload: UserId,
  };
};
