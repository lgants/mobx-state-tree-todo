import { types, applySnapshot, onSnapshot, getSnapshot } from "mobx-state-tree"
// import { types, applySnapshot, getSnapshot, onSnapshot } from "mobx-state-tree"
import User from './User'
import Todo from './Todo'

let states = []
let currentFrame = -1

const RootStore = types.model({
  users: types.map(User),
  todos: types.optional(types.map(Todo), {})
}).views(self => ({
  // computed properties
  get pendingCount() {
    return self.todos.values().filter(todo => !todo.done).length
  },
  get completedCount() {
    return self.todos.values().filter(todo => todo.done).length
  },
  // getTodosWhereDoneIs is a model view (i.e. declared as a function over the properties (first argument) of the model declaration); model views can accept parameters and only read data from the store
  // getTodosWhereDoneIs view can also be used outside of its model (e.g. it can be used inside views)
  getTodosWhereDoneIs(done) {
    return self.todos.values().filter(todo => todo.done === done)
  }
})).actions(self => {
  // actions
  function addTodo(id, name) {
    self.todos.set(id, Todo.create({ name }))
  }

  return {addTodo}
});


// users is required because it's not marked as optional
// MST supports references out of the box (i.e. that makes it possible to define a "user" attribute on the Todo model that references to a User) - requires adding an identifier to model
// the value of that attribute will be the identifier of the User in the snapshot, it will resolve to the correct instance of the User model when rendering and it's possible to provide either the User model instance or the User identifier when setting
const store = RootStore.create({
  "users": {
    "1": {
      id: "1",
      name: "mweststrate"
    },
    "2": {
      id: "2",
      name: "mattiamanzati"
    },
    "3": {
      id: "3",
      name: "johndoe"
    }
  },
  "todos": {
    "1": {
      "name": "Eat a cake",
      "done": true
    }
  }
})

onSnapshot(store, snapshot => {
  if (currentFrame === states.length - 1) {
    currentFrame++
    states.push(snapshot)
  }
})

export function previousState() {
  if (currentFrame === 0) return
  currentFrame--
  applySnapshot(store, states[currentFrame])
}

export function nextState() {
  if (currentFrame === states.length - 1) return
  currentFrame++
  applySnapshot(store, states[currentFrame])
}

export default store
