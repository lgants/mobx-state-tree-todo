import React from 'react';
import { observer } from 'mobx-react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import TodoRow from './TodoRow';

const TodoTable = observer(props => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Done</TableHeaderColumn>
          <TableHeaderColumn>Task</TableHeaderColumn>
          <TableHeaderColumn>Assignee</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          props.store.todos.values().map((todo, idx) => {
            return <TodoRow key={idx} store={props.store} todo={todo} />
          })
        }
      </TableBody>
    </Table>
  )
})

export default TodoTable;
