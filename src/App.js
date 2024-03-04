/* eslint-disable unicorn/filename-case */
import './App.css'
import { ActionPanel, TodoList } from './components'

const App = () => {
  return (
    <main className='App'>
      <ActionPanel/>
      <TodoList />
    </main>
  )
}

export default App
