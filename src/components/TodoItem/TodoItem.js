import { CheckBox } from '../../components'
import { setToggleStatus } from '../../redux/todoListSlice/todoListSlice'
import { useDispatch } from 'react-redux'
import sTi from './TodoItem.module.css'

export const TodoItem = ({ status, id, text, index }) => {
  const dispatch = useDispatch()
  return (
    <li className={sTi.todoItem}>
      <div className={sTi.todoTitle}
           onClick={() => dispatch(setToggleStatus(id))}>
        <span>{index}. </span>
        <span>{text}</span>
      </div>
      <div className={sTi.todoStatus}>
      <span className={status ? sTi.completeTxt : sTi.notCompleteTxt}>
          {status ? 'Completed' : 'Not Completed'}
        </span>
        <CheckBox status={status} id={id}/>
      </div>
    </li>
  )
}
