import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";
import { Alert } from "reactstrap";
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  updateUserRequest,
  getOneUserRequest,
  usersError,
} from "../actions/users";
import EditUserForm from "./EditUser";
import NewUserForm from "./NewUserForm";
import UsersList from "./UsersList";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.getUsersRequest();
  }
  handleSumbit = ({ firstName, lastName }) => {
    this.props.createUserRequest({ firstName, lastName });
    console.log(firstName, lastName);
  };
  handleEditUser = ({ firstName, lastName }, id) => {
    this.props.updateUserRequest({ firstName, lastName }, id);
  };

  handleDeleteUser = (id) => {
    this.props.deleteUserRequest(id);
  };
  handleGetOneUser = (id) => {
    this.props.getOneUserRequest(id);
  };
  handleCloseAlert = () => {
    this.props.usersError({ error: "" });
  };
  render() {
    const users = this.props.users;
    return (
      <Router>
        <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
          <Alert
            color="danger"
            isOpen={!!this.props.users.error}
            toggle={this.handleCloseAlert}
          >
            {this.props.users.error}
          </Alert>
          <Route
            exact
            path="/"
            render={() => <NewUserForm handleSumbit={this.handleSumbit} />}
          />

          <Route
            path="/"
            exact
            render={() => (
              <UsersList
                users={users.items}
                handleDeleteUser={this.handleDeleteUser}
              ></UsersList>
            )}
          ></Route>
          <Route
            exact
            path="/edit/:id"
            render={(props) => (
              <EditUserForm
                handleEditUser={this.handleEditUser}
                handleGetOneUser={this.handleGetOneUser}
                {...props}
              ></EditUserForm>
            )}
          ></Route>
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};
export default connect(mapStateToProps, {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  updateUserRequest,
  getOneUserRequest,
  usersError,
})(App);
