import { types } from "mobx-state-tree"
import Todo from './Todo'

const User = types.model({
  name: ""
}).actions(self => {
  function addTodo(id, name) {
    self.todos.set(id, Todo.create({ name }))
  }

  return {addTodo}
})

// const User = types.model({
//    name: types.optional(types.string, "")
// })

// const john = User.create()

export default User
