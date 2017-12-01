import React from 'react';
import { observer } from 'mobx-react';
import { getSnapshot } from "mobx-state-tree"
// import { DropDownMenu, MenuItem } from 'material-ui';

const UserPicker = observer(props =>
  <div>
    <select
      value={props.user ? props.user.id : ""}
      onChange={e => props.onChange(e.target.value)}
    >
      <option value="">-none-</option>
      {
        props.store.users.values().map((user, idx) => {
          return <option key={idx} value={user.id}>{user.name}</option>
        })
      }
    </select>
  </div>
)

export default UserPicker;
