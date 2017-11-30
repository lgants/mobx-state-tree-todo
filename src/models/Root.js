import { types, applySnapshot, onSnapshot } from "mobx-state-tree"
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

const store = RootStore.create({
  users: { } // users is required here because it's not marked as optional
})

// Note that computed properties won't appear in snapshots
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
