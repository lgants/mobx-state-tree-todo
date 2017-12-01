import React from 'react';
import { observer, inject } from 'mobx-react';

const TodoCounter = inject("store")(observer(props =>
  <div>
    {props.store.pendingCount} pending, {props.store.completedCount} completed
  </div>
))

export default TodoCounter;
