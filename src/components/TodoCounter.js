import React from 'react';
import { observer, inject } from 'mobx-react';
import { Card, CardText } from 'material-ui';

const TodoCounter = inject("store")(observer(props =>
  <Card className="card">
    <CardText style={{textAlign: "center"}}>
      <h5>
        {props.store.pendingCount} PENDING  {props.store.completedCount} COMPLETED
      </h5>
    </CardText>
  </Card>
))

export default TodoCounter;
