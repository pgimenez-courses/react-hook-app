import { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReduce/todoReducer'

const init = () => {
  return JSON.parse( localStorage.getItem('todos') ) || []
}

const initialState = []

const useTodos = () => {

  const [ todos, dispatch ] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
  
    dispatch( action )
  
  }

  const handleRemoveTodo = ( id ) => {
    dispatch({
      type: '[TODO] Remove Todo',
      payload: id
    })
  }

  const handleToggleTodo = ( id ) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id
    })
  }

  const getTodosCount = () => todos.length

  const getPendientTodosCount = () => todos.filter( (todo) => !todo.done ).length

  return {
    todos,
    handleNewTodo,
    handleToggleTodo,
    handleRemoveTodo,
    todosCount: getTodosCount(),
    pendientTodosCount: getPendientTodosCount()
  }

}

export { useTodos }