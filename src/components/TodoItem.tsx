import React, { Component } from "react";
import { ITodo } from "../definitions/index";

interface ITodoItemProps {
  todo: ITodo;
  markComplete: Function;
  delTodo: (id: ITodo["id"]) => void;
}

const getStyle = (completed: ITodo['completed']): React.CSSProperties => {
  return {
    background: "#f4f4f4",
    padding: "10px",
    borderBottom: "1px #ccc dotted",
    textDecoration: completed ? "line-through" : "none"
  };
};

export const TodoItem: React.FC<ITodoItemProps> = ({
  todo: { id, title, completed },
  markComplete,
  delTodo
}): JSX.Element => {
  return (
    <div style={getStyle(completed)}>
      <p>
        <input type="checkbox" onChange={() => markComplete(id)} /> {title}
        <button
          onClick={() => delTodo(id)}
          style={btnStyle as React.CSSProperties}
        >
          x
        </button>
      </p>
    </div>
  );
};

/** @type {{search: React.CSSProperties}} */
// https://github.com/Microsoft/TypeScript/issues/18744
// https://github.com/Microsoft/TypeScript/issues/16389
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
