import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { getSnapshot } from "mobx-state-tree"
import { SelectField, MenuItem } from 'material-ui';

// onChange={e => this.props.setUser(e.target.value)}

class UserPicker extends Component {
  render() {
    return (
      <SelectField
        value={this.props.user ? this.props.user.id : ""}
      >
        {
          this.props.store.users.values().map((user, idx) => {
            return <MenuItem key={idx} value={user.id} primaryText={user.name} onClick={e => this.props.setUser(user.id)} />
          })
        }
      </SelectField>
    )
  }
}

{/* <select
  value={this.props.user ? this.props.user.id : ""}
  onChange={e => this.props.onChange(e.target.value)}
>
  <option value="">-none-</option>
  {
    this.props.store.users.values().map((user, idx) => {
      return <option key={idx} value={user.id}>{user.name}</option>
    })
  }
</select> */}

export default observer(UserPicker);
