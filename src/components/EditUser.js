import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.props.handleGetOneUser(this.props.match.params.id);
    this.state = { firstName: "", lastName: "" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        firstName: this.props.users.user.firstName,
        lastName: this.props.users.user.lastName,
      });
    }, 500);
  }
  id = this.props.match.params.id;

  handleEditUser = (e) => {
    e.preventDefault();
    this.props.handleEditUser(
      {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      },
      this.props.match.params.id
    );
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleEditUser}>
          <FormGroup>
            <Label>first Name</Label>
            <Input
              required
              placeholder="first name..."
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label>last Name</Label>
            <Input
              required
              placeholder="last name..."
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Button block outline type="submit" color="primary">
              Update
            </Button>
          </FormGroup>
        </Form>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(EditUserForm);
