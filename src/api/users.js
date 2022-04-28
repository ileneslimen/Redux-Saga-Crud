import axios from "axios";

export const GetUsers = () => {
  return axios.get("http://rem-rest-api.herokuapp.com/api/users", {
    params: { limit: 1000 },
  });
};

export const GetOneUser = (id) => {
  return axios.get(`http://rem-rest-api.herokuapp.com/api/users/${id}`, {
    params: {
      id: id,
    },
  });
};

export const createNewUser = ({ firstName, lastName }) => {
  return axios.post("http://rem-rest-api.herokuapp.com/api/users", {
    firstName,
    lastName,
  });
};

export const deleteUser = (id) => {
  return axios.delete(`http://rem-rest-api.herokuapp.com/api/users/${id}`);
};
export const updateUser = (data, id) => {
  return axios.put(`http://rem-rest-api.herokuapp.com/api/users/${id}`, data);
};
