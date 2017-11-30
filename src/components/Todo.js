import React from 'react';
import { observer } from 'mobx-react';

// Seperate the rendering of App and Todo to prevent the entire app from updating when a todo is toggled or changed; MobX can emit granular updates
const Todo = observer(props =>
  <div>
      <input type="checkbox" checked={props.todo.done} onChange={e => props.todo.toggle()} />
      <input type="text" value={props.todo.name} onChange={e => props.todo.setName(e.target.value)} />
  </div>
)

export default Todo;
