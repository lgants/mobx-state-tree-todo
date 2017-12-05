import { types } from "mobx-state-tree"
import User from "./User";

// use types.late(() => User) instead of just User to postpone the resolution of the User type by hoisting it (i.e. type) and defering its evaluation - avoids circular references
// use types.maybe(...) to allow the user property to be null and be initialized as null since assignee for the Todo could be omitted
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
    // reference value can be set by providing either the identifier or a model instance
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

// const eat = Todo.create()

export default Todo;
