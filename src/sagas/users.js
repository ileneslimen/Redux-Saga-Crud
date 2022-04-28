import {
  takeEvery,
  call,
  fork,
  put,
  takeLatest,
  take,
} from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";
function* getUsers() {
  try {
    const res = yield call(api.GetUsers);

    yield put(actions.getUsersSuccess({ items: res.data.data }));
  } catch (error) {
    yield put(actions.usersError({ error: "could not get users" }));
  }
}
function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

//create user request

// // worker function

function* createUser(action) {
  try {
    const res = yield call(api.createNewUser, {
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
    });
    console.log(res);
    yield call(getUsers);
  } catch (error) {
    yield put(actions.usersError({ error: "could not create user" }));
  }
}
//watcher function
function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

// // delete user
function* deleteUser(id) {
  try {
    yield call(api.deleteUser, id);
    yield call(getUsers);
  } catch (error) {
    yield put(actions.usersError({ error: "could not delete user" }));
  }
}
// take lower level helper we dont need a worker saga for it
function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    console.log(action);
    yield call(deleteUser, action.id);
  }
}

// update user

//worker function

function* updateUser(action) {
  try {
    const res = yield call(
      api.updateUser,
      {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      },
      action.id
    );
    console.log(res);
    yield call(getUsers);
  } catch (error) {
    yield put(actions.usersError({ error: "could not update user" }));
  }
}
// watcher function
function* watchUpdateUserRequest() {
  yield takeLatest(actions.Types.UPDATE_USER_REQUEST, updateUser);
}

//getOneUser

function* getOneUser({ payload }) {
  try {
    const res = yield call(api.GetOneUser, payload);
    console.log(res.data);
    const x = yield put(actions.getOneUserSuccess(res.data));
    console.log(x);
  } catch (error) {
    yield put(actions.usersError({ error: "could not get user" }));
  }
}
function* watchGetOneUserRequest() {
  yield takeEvery(actions.Types.GET_ONEUSER_REQUEST, getOneUser);
}

const UsersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
  fork(watchUpdateUserRequest),
  fork(watchGetOneUserRequest),
];

export default UsersSagas;
