import React from 'react'
import Form from './Form';
import TodoList from './TodoList';




export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleCompleted = () => {
    this.setState({
      ...this.state, todos: this.state.todos.filter(todo => {
        return  (todo.completed === false)
      })
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos:</h1>
        <TodoList todos={todos} />
        <Form />
        <button onClick={this.handleCompleted}>Clear Completed</button>
      </div>
    )
  }
}
