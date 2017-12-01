import React, { Component } from 'react';
import { getSnapshot } from "mobx-state-tree"
import { Checkbox } from 'material-ui';

// const styles = {
//   block: {
//     maxWidth: 250,
//   },
//   checkbox: {
//     marginBottom: 16,
//   },
// };

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
      <Checkbox
        checked={this.props.checked}
        onCheck={e => this.props.todo.toggle()}
      />
    )
  }
}

export default CheckDone;
