import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { getSnapshot } from "mobx-state-tree"
import { DropDownMenu, MenuItem } from 'material-ui';


class UserPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <select
          value={this.props.user ? this.props.user.id : ""}
          onChange={e => this.props.onChange(e.target.value)}
        >
          <option value="">-none-</option>
          {
            this.props.store.users.values().map((user, idx) => {
              return <option key={idx} value={user.id}>{user.name}</option>
            })
          }
        </select>
        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
      </div>
    )
  }
}

export default observer(UserPicker);
