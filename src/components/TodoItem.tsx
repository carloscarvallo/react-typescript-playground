import React, { Component } from "react";
import { ITodo } from "../definitions/index";

interface ITodoItemProps {
  todo: ITodo;
  markComplete: Function;
  delTodo: (id: ITodo['id']) => void;
}

export class TodoItem extends Component<ITodoItemProps, any> {
  public getStyle = (): React.CSSProperties => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  public render(): JSX.Element {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={() => this.props.markComplete(id)} />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle as React.CSSProperties}>x</button>
        </p>
      </div>
    );
  }
}

/** @type {{search: React.CSSProperties}} */
// https://github.com/Microsoft/TypeScript/issues/18744
// https://github.com/Microsoft/TypeScript/issues/16389
const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default TodoItem;
