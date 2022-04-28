import React from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

function UsersList({ users, handleDeleteUser }) {
  return (
    <ListGroup>
      {users
        .sort((a, b) =>
          a.firstName > b.firstName
            ? 1
            : a.firstName < b.firstName
            ? -1
            : a.lastName > b.lastName
            ? 1
            : a.lastName < b.lastName
            ? -1
            : 0
        )
        .map((user) => (
          <ListGroupItem key={user.id}>
            <section style={{ display: "flex" }}>
              <div style={{ flexGrow: 1, margin: "auto 0" }}>
                {user.firstName} {user.lastName}
              </div>
              <div>
                <Button
                  outline
                  color="danger"
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </Button>
                <Link to={`/edit/${user.id}`}>
                  <Button outline color="info">
                    Edit
                  </Button>
                </Link>
              </div>
            </section>
          </ListGroupItem>
        ))}
    </ListGroup>
  );
}

export default UsersList;
