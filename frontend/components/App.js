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

  handleNew = (name) => {
    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    };

    this.setState({
      ...this.state, todos: [...this.state.todos, newTodo]
    });
  }

  handleCompleted = () => {
    this.setState({
      ...this.state, todos: this.state.todos.filter(todo => {
        return  (todo.completed === false)
      })
    })
  }

  handleToggle = (clickedId) => {
    this.setState({
      ...this.state, 
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
          return {
            ...todo, completed: !todo.completed
          }
        } 
          return todo
        
      })
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todos:</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <Form handleNew={this.handleNew}/>
        <button onClick={this.handleCompleted}>Clear Completed</button>
      </div>
    )
  }
}
