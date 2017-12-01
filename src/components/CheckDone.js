import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { getSnapshot } from "mobx-state-tree"
import { Checkbox } from 'material-ui';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

class CheckDone extends Component {
  // state = {
  //   checked: false,
  // }
  //
  // updateCheck() {
  //   this.setState((oldState) => {
  //     return {
  //       checked: !oldState.checked,
  //     };
  //   });
  // }

  render() {
    return (
      <div>
        <Checkbox
          checked={this.props.checked}
          onCheck={e => this.props.todo.toggle()}
          style={styles.checkbox}
        />
      </div>
    )
  }
}

export default CheckDone;
