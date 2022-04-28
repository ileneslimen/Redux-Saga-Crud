import { Types } from "../actions/users";
const initalState = {
  items: [],
  user: {},
  error: "",
};
const users = (state = initalState, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return { ...state, items: action.payload.items };
    case Types.GET_ONEUSER_SUCCESS:
      return { ...state, user: action.payload };
    case Types.USERS_ERRORS:
      console.log(action.payload.error);
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
};

export default users;
