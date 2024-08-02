import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <ListGroup>
      {todos.map((todo, index) => (
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
          {todo}
          <Button variant="danger" size="sm" onClick={() => deleteTodo(index)}>
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
