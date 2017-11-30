import { types, applySnapshot, onSnapshot } from "mobx-state-tree"
import User from './User'
import Todo from './Todo'

let states = []
let currentFrame = -1

const RootStore = types.model({
  users: types.map(User),
  todos: types.optional(types.map(Todo), {})
})

const store = RootStore.create({
  users: { } // users is required here because it's not marked as optional
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
