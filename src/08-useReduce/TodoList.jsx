import PropTypes from 'prop-types'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {
        todos.map( ({ id, description, done }) =>
          <TodoItem
            key={id}
            id={id}
            description={description}
            done={done}
            onDeleteTodo={ onDeleteTodo }
            onToggleTodo={ onToggleTodo }
          /> )
      } 
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired 
}