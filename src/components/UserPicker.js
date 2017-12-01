import React from 'react';
import { observer } from 'mobx-react';
import { SelectField, MenuItem } from 'material-ui';


const UserPicker = observer(props => {
  return (
    <SelectField value={props.user ? props.user.id : ""} >
      {props.store.users.values().map((user, idx) => {
          return (<MenuItem
                    key={idx}
                    value={user.id}
                    primaryText={user.name}
                    onClick={e => props.setUser(user.id)}
                  />)
      })}
    </SelectField>
  )
})


export default UserPicker;
