import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { ITodo } from "../definitions/index";

interface ITodosProps {
  todos: Array<ITodo>;
  markComplete: Function;
  delTodo: (id: ITodo['id']) => void;
}

export default class Todos extends Component<ITodosProps, any> {
  public render(): JSX.Element[] {
    return this.props.todos.map((todo: ITodo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// Todos.propTypes = {
//   todos: PropTypes.array.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired,
// }
