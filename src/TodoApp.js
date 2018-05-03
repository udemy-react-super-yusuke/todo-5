import React from "react";
import { AddTodo } from "./components/AddTodo";
import { List } from "./components/List";

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      nextId: 0
    };
  }

  render() {
    // state を変更するための addTodo メソッドを
    // AddTodo コンポーネントに渡す
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo addTodo={this.addTodo} />
        <List todos={this.state.todos} />
      </div>
    );
  }

  // this.state.todos を変更するためのメソッド
  // AddTodo コンポーネントに渡す
  addTodo = title => {
    this.setState({
      todos: [...this.state.todos, { id: this.state.nextId + 1, title: title }],
      nextId: this.state.nextId + 1
    });
  };
}
