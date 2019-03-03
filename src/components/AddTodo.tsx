import React, { Component } from "react";

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

  public onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  public onChange = (e: React.ChangeEvent<HTMLInputElement>): void => this.setState({ [e.target.name]: e.target.value } as Pick<IAddTodoState, keyof IAddTodoState>);

  render(): JSX.Element {
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
