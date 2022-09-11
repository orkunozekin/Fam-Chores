import TodoList from '../../components/todo-list/TodoList'
import { mock_todos } from '../../../model/data/Todos'
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <section className="dashboard-container">
      <h1 className="dashboard-title">Things to remember</h1>
      <TodoList todos={mock_todos} />
    </section>
  )
}

export default Dashboard
