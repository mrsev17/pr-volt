import { useDispatch } from 'react-redux'
import { setToggleStatus } from '../../redux/todoListSlice/todoListSlice'
import sCb from './CheckBox.module.css'

export const CheckBox = ({ status, id }) => {
  const dispatch = useDispatch()
  return (
    <div className={sCb.checkboxWrapper}>
      <label>
        <input
            className={status ? 'checked' : ''}
            type='checkbox'
            checked={status}
            onChange={() => dispatch(setToggleStatus(id))}
        />
        <span> {status} </span>
      </label>
    </div>
  )
}
