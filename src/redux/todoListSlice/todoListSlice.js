import { v4 as uuidv4 } from 'uuid'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  'todos': [
    {
      'text': 'Task 01',
      'status': false,
      'id': '01',
    },
    {
      'text': 'Task 02',
      'status': true,
      'id': '02',
    },
    {
      'text': 'Task 03',
      'status': false,
      'id': '03',
    },
  ],
  'filter': 'all',
}

const todoListReducer = createSlice({
  'name': 'todoList',
  initialState,
  'reducers': {
    setRestartList() {
      return initialState
    },
    setNewTodo(state, action) {
      const newTodo = {
        'text': action.payload,
        'status': false,
        'id': uuidv4(),
      }
      state.todos.push(newTodo)
    },
    setToggleStatus(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, 'status': !todo.status }
        }
        return todo
      })
    },
    setFilter(state, action) {
      state.filter = action.payload
    },
  },
})

export const {
  setRestartList,
  setNewTodo,
  setToggleStatus,
  setFilter,
} = todoListReducer.actions
export default todoListReducer.reducer
