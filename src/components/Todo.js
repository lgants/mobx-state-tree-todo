// import React from 'react';
// import { observer } from 'mobx-react';
// import UserPicker from './UserPicker';
// import CheckDone from './CheckDone';
//
// // Seperate rendering of App and Todo to prevent the entire app from updating when a todo is toggled or changed; each observer declaration will enable the React component to only re-render if any of it's observed data changes
// const Todo = observer(props =>
//   <div className="row">
//     <div className="col s2">
//       <CheckDone checked={props.todo.done} toggle={props.todo.toggle}/>
//     </div>
//     <div className="col s6">
//       <input
//         type="text"
//         value={props.todo.name}
//         onChange={e => props.todo.setName(e.target.value)}
//       />
//     </div>
//     <div className="col s4">
//       <UserPicker
//         user={props.todo.user}
//         store={props.store}
//         onChange={userId => props.todo.setUser(userId)}
//       />
//     </div>
//   </div>
// )
//
// export default Todo;
