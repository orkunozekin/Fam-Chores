import React from 'react'
import { Todos } from '../../../model/Todo'
import Todo from '../todo-item/Todo'
import './TodoList.scss'

const TodoList = ({ todos }: Todos) => {

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo
          id={todo.id}
          key={todo.id}
          name={todo.name}
          date_created={todo.date_created}
          type={todo.type}
          date_due={todo.date_due}
        />
      ))}
    </ul>
  )

}
export default TodoList