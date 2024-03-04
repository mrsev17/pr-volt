import ApStyle from './ActionPanel.module.css'
import globalStyle from '../../globalStyles.module.css'
import { CircleInfo, Form, Filter } from '../../components'
import { useSelector } from 'react-redux'

export const ActionPanel = () => {
  const getTodos = useSelector((state) => state.todos)
  const calcCompleted = getTodos.filter((todo) => todo.status).length
  const calcNotCompleted = getTodos.filter((todo) => !todo.status).length
  return (
    <section className={ApStyle.actionPanel}>
      <div className={globalStyle.container}>
        <Form />
        <div className={ApStyle.counter}>
          <CircleInfo value={calcCompleted} text="Completed" />
          <CircleInfo value={calcNotCompleted} text="Not Completed" />
        </div>
        <Filter />
      </div>
    </section>
  )
}
