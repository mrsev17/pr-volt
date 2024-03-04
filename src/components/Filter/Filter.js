import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/todoListSlice/todoListSlice'
import sF from './Filter.module.css'

export const Filter = () => {
  const dispatch = useDispatch()
  const getFilter = useSelector((state) => state.filter)
  return <div className={sF.filter}>
    <button className={getFilter === 'all' ? sF.active : ''}
            onClick={() => dispatch(setFilter('all'))} >
      All
    </button>
    <button
      onClick={() => dispatch(setFilter('completed'))}
      className={
        `${getFilter === 'completed' ? sF.active : ''}`
      }
    >
      Completed
    </button>
    <button
      onClick={() => dispatch(setFilter('notCompleted'))}
      className={
      getFilter === 'notCompleted' ? sF.active : ''}>
        Not Completed
    </button>
  </div>
}
