import React, { Component } from "react";
import PropTypes from 'prop-types';

interface IAddTodoProps {
  addTodo: Function;
}

interface IAddTodoState {
  title: string;
}

class AddTodo extends Component<IAddTodoProps, IAddTodoState> {
  state = {
    title: ""
  };

  onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({ [e.target.name]: e.target.value } as Pick<IAddTodoState, keyof IAddTodoState>);

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          style={{ flex: "10", padding: "5px" }}
          type="text"
          name="title"
          value={this.state.title}
          placeholder="Add Todo..."
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="Submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
