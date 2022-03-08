import React from 'react'

let idx = 0;
const getIdx = () => ++idx;

const todos = [
  {id: getIdx(), todo: ''}
]

const initialState = {
  errorMessage: '',
  todo: ''
}




export default class App extends React.Component {
  state = initialState;

  render() {
    return (
      <div>
        <h1>Todos:</h1>
        <ul>
          <li>Walk the dog</li>
          <li>Learn React</li>
          <li>Have Fun</li>
        </ul>  

        <form>
          <input/>
          <button>Submit</button>
        </form>     

        <button>Clear</button>
      </div>
    )
  }
}
