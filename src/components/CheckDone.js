import React from 'react';
import { Checkbox } from 'material-ui';

const CheckDone = props => {
  return (
    <Checkbox
      checked={props.checked}
      onCheck={e => props.toggle()}
    />
  )
}

export default CheckDone;
