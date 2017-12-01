import { types } from "mobx-state-tree"
import User from "./User";

const Todo = types.model({
  name: types.optional(types.string, ""),
  done: types.optional(types.boolean, false),
  user: types.maybe(types.reference(types.late(() => User)))
}).actions(self => {
  // self is the object being constructed when a model instance is created
  function setName(newName) {
    self.name = newName
  }

  function setUser(user) {
    if (user === "") {
      // set user to null when selected value is empty
      self.user = null
    } else {
      self.user = user
    }
  }

  function toggle() {
    self.done = !self.done
  }

  return {setName, setUser, toggle}
})

// const Todo = types.model({
//   name: types.optional(types.string, ""),
//   done: types.optional(types.boolean, false)
// })

const eat = Todo.create()

export default Todo;
