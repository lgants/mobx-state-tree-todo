import { types } from "mobx-state-tree";
import Todo from "./Todo";

// types.maybe(...) allows the user property to be null and be initialized as null
// types.late(() => Model) postpones the resolution of the type - prevents circular references that may use a type before it's declared
const User = types.model({
    id: types.identifier(types.string),
    name: types.optional(types.string, ""),
}).actions(self => {
  function addTodo(id, name) {
    self.todos.set(id, Todo.create({ name }))
  }

  return {addTodo}
})

// const john = User.create()

export default User
