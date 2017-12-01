import React from 'react';
import { observer } from 'mobx-react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import UserPicker from './UserPicker';
import CheckDone from './CheckDone';

const TodoRow = observer(props => {
  return (
    <TableRow style={{borderBottom: "0px"}}>
      <TableRowColumn>
        <CheckDone checked={props.todo.done} toggle={props.todo.toggle}/>
      </TableRowColumn>
      <TableRowColumn>
        <input
          type="text"
          value={props.todo.name}
          onChange={e => props.todo.setName(e.target.value)}
        />
      </TableRowColumn>
      <TableRowColumn>
        <UserPicker
          user={props.todo.user}
          store={props.store}
          setUser={props.todo.setUser}
        />
      </TableRowColumn>
    </TableRow>
  )
})

// <UserPicker
//   user={props.todo.user}
//   store={props.store}
//   setUser={props.todo.setUser}
//   onChange={userId => props.todo.setUser(userId)}
// />

export default TodoRow;
