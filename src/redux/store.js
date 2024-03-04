import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import todoReducer from './todoListSlice/todoListSlice'

const persistConfig = {
  'key': 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, todoReducer)

export const store = createStore(
  persistedReducer,
  applyMiddleware(),
)

export const persistor = persistStore(store)
