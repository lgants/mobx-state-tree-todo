import { types } from "mobx-state-tree"
import Todo from './Todo'

const User = types.model({
    id: types.identifier(types.string),
    name: types.optional(types.string, "")
}).actions(self => {
  function addTodo(id, name) {
    self.todos.set(id, Todo.create({ name }))
  }

  return {addTodo}
})

// const john = User.create()

export default User
