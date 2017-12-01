import React from 'react';
import { observer, inject } from 'mobx-react';
import { RaisedButton } from 'material-ui';
// import Todo from './Todo';
import TodoCounter from './TodoCounter';
import TodoTable from './TodoTable';
import '../styles/App.css';

const randomId = () => Math.floor(Math.random() * 1000).toString(36);

// Todo will re-render only if that todo changes, and App will re-render only if a new todo is added/removed since it's observing only the length of the todo map
const App = inject("store")(observer( props =>
  <div className="container">
    <TodoCounter />
    <RaisedButton
      label="Add Task"
      onClick={e => props.store.addTodo(randomId(), 'New Task')}
      default={true}
    />
    <TodoTable store={props.store}/>
  </div>
))

export default App;
