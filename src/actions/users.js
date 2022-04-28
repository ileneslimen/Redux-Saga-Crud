export const Types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  GET_ONEUSER_REQUEST: "users/get_oneuser_request",
  GET_ONEUSER_SUCCESS: "users/get_oneuser_success",
  CREATE_USER_REQUEST: "users/create_user_request",
  DELETE_USER_REQUEST: "users/delete_users_request",
  UPDATE_USER_REQUEST: "users/update_user_request",
  USERS_ERRORS: "USERS_ERRORS",
};
export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});
export const getUsersSuccess = ({ items }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: { items },
});
// get one user

export const getOneUserRequest = (id) => {
  return { type: Types.GET_ONEUSER_REQUEST, payload: id };
};

export const getOneUserSuccess = (user) => {
  return { type: Types.GET_ONEUSER_SUCCESS, payload: user };
};

export const createUserRequest = ({ firstName, lastName }) => {
  return { type: Types.CREATE_USER_REQUEST, payload: { firstName, lastName } };
};

export const deleteUserRequest = (id) => {
  return { type: Types.DELETE_USER_REQUEST, id };
};

export const usersError = ({ error }) => {
  return { type: Types.USERS_ERRORS, payload: { error } };
};

export const updateUserRequest = ({ firstName, lastName }, id) => {
  return {
    type: Types.UPDATE_USER_REQUEST,
    payload: { firstName, lastName },
    id,
  };
};
