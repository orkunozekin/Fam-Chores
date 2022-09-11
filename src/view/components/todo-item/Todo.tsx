import React from 'react'
import { Todo as TodoProps } from '../../../model/Todo'
import './Todo.scss'

const Todo = ({ name, date_created, type, date_due }: TodoProps) => {

  return (
    <li className="todo-item">
      <h2 className="todo-name">{name}</h2>
      <section className="todo-details">
        <span>{type}</span>
      </section>
      <span>Due date: {date_due}</span>
    </li>
  )
}
export default Todo