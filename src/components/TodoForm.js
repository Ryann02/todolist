import React, { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <InputGroup>
        <Form.Control
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tambahkan tugas anda"
        />
        <Button className="text" type="submit" variant="primary">
          Tambah
        </Button>
      </InputGroup>
    </Form>
  );
};

export default TodoForm;
