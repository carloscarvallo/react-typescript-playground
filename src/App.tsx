import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { ITodo } from "./definitions/index";
import "./App.css";

interface IState {
  todos: Array<ITodo>;
}

interface IProps {}

class App extends React.Component<IProps, IState> {
  state = {
    todos: []
  };

  componentDidMount(): void {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }));
  }

  markComplete = (id: number): void => {
    this.setState({
      todos: this.state.todos.map((todo: ITodo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = (id: number): void => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(() =>
      this.setState({
        todos: [...this.state.todos.filter((todo: ITodo) => todo.id !== id)]
      })
    );
  };

  // Add Todo
  addTodo = (title: string): void => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render(): JSX.Element {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
