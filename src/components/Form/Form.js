import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setNewTodo } from '../../redux/todoListSlice/todoListSlice'
import sForm from './Form.module.css'

export const Form = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const onInput = (event) => {
    setText(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if (text.length > 5 && text.length <= 28) {
      dispatch(setNewTodo(text))
      setText('')
    }
  }
  return (
    <form className={sForm.form} onSubmit={onSubmit}>
      <div>
        <label htmlFor='textTodo'></label>
        <input id='textTodo'
               type='text'
               placeholder='Input here new todo...'
               value={text} onChange={onInput}
               maxLength={28} />
      </div>
      <button type='submit'>Add ToDo +</button>
    </form>
  )
}
