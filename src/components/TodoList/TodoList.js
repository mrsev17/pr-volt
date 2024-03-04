import { useSelector } from 'react-redux'
import { TodoItem } from '../../components'
import { dataFiltrBy } from '../../utils/functions'
import globalStyle from '../../globalStyles.module.css'
import tLs from './TodoList.module.css'

export const TodoList = () => {
  const getList = useSelector((state) => state.todos)
  const getFilter = useSelector((state) => state.filter)
  const filteredData = dataFiltrBy(getList, getFilter)
  return (
    <section className={tLs.listWrapper}>
      <div className={globalStyle.container}>
        <ul className={tLs.todoList}>
          {filteredData.map((todo, index) => {
            return <TodoItem key={todo.id}
              status={todo.status}
              id={todo.id}
              text={todo.text}
              index={index + 1}/>
          })}
        </ul>
      </div>
    </section>
  )
}
