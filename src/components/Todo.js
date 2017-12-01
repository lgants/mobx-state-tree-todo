import React from 'react';
import { observer, inject } from 'mobx-react';
import UserPicker from './UserPicker';

// Seperate rendering of App and Todo to prevent the entire app from updating when a todo is toggled or changed; each observer declaration will enable the React component to only re-render if any of it's observed data changes
const Todo = inject("store")(observer(props =>
  <div>
    <input
      type="checkbox"
      checked={props.todo.done}
      onChange={e => props.todo.toggle()}
    />
    <input
      type="text"
      value={props.todo.name}
      onChange={e => props.todo.setName(e.target.value)}
    />
    <UserPicker
      user={props.todo.user}
      store={props.store}
      onChange={userId => props.todo.setUser(userId)}
    />
  </div>
))

export default Todo;
