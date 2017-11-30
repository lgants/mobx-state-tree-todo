import { types } from "mobx-state-tree"

const Todo = types.model({
  name: "",
  done: false
}).actions(self => {
  // self is the object being constructed when a model instance is created
  function setName(newName) {
    self.name = newName
  }

  function toggle() {
    self.done = !self.done
  }

  return {setName, toggle}
})

// const Todo = types.model({
//   name: types.optional(types.string, ""),
//   done: types.optional(types.boolean, false)
// })

const eat = Todo.create()

export default Todo;
