import React from 'react';
import { observer, inject } from 'mobx-react';
import { RaisedButton } from 'material-ui';
import '../styles/App.css';

const randomId = () => Math.floor(Math.random() * 1000).toString(36);

const App = inject("store")(observer( props =>
  (<div className="container">
    <RaisedButton
      label="Add Task"
      onClick={e => props.store.addTodo(randomId(), 'New Task')}
      default={true}
    />
    {props.store.todos.values().map(todo =>
      <div>
        <input type="checkbox" checked={todo.done} onChange={e => todo.toggle()} />
        <input type="text" value={todo.name} onChange={e => todo.setName(e.target.value)} />
      </div>
    )}
  </div>)
))

export default App;
