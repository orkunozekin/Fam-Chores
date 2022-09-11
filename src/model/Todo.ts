export interface Todo {
  id: string
  name: string,
  date_created: string
  type: string,
  date_due: string
}

export interface Todos {
  todos: Todo[]
}