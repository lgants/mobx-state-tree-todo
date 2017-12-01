import React from 'react';
import { observer } from 'mobx-react';

const UserPicker = observer(props =>
  <div>
  <select
    value={props.user ? props.user.id : ""}
    onChange={e => props.onChange(e.target.value)}
  >
    <option value="">-none-</option>
    {props.store.users.values().map(user => <option value={user.id}>{user.name}</option>)}
  </select>
  </div>
)

export default UserPicker;