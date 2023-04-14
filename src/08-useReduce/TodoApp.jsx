import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodos } from '../hooks'

export const TodoApp = () => {

  const {
    todos,
    handleNewTodo,
    handleToggleTodo,
    handleRemoveTodo,
    todosCount,
    pendientTodosCount
  } = useTodos();

  return (
    <>
      <h1>TodoApp { todosCount }, <small>pendientes: { pendientTodosCount }</small> </h1>
      <hr />

      <div className="row">

        <div className="col-7">
          <TodoList
            todos={ todos }
            onDeleteTodo={ handleRemoveTodo }
            onToggleTodo={ handleToggleTodo }
          />
        </div>

        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />

          <TodoAdd
            onNewTodo={ handleNewTodo }
          />

        </div>

      </div>

    </>
  )
}
