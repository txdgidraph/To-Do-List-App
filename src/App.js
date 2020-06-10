import React, { Component } from 'react';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
      id: 1,
      title: "Take out the Trash",
      completed: false
    },
    {
      id: 2,
      title: "Dinner with friends",
      completed: false
    },
    {
      id: 3,
      title: "Develop Website",
      completed: false
    },
  ]
}
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
