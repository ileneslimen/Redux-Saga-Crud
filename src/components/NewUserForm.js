import React, { Component } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export class NewUserForm extends Component {
  state = { firstName: "", lastName: "" };
  handle = (e) => {
    e.preventDefault();
    this.props.handleSumbit({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
    this.setState({ firstName: "", lastName: "" });
  };
  render() {
    return (
      <Form onSubmit={this.handle}>
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
            Create
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default NewUserForm;
