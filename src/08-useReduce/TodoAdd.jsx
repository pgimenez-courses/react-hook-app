import PropTypes from 'prop-types'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

  const {
    description, onInputChange, onResetForm
  } = useForm({ description: '' })

  const onSubmit = ( event ) => {
    event.preventDefault()

    const newValue = description.trim()
    if ( newValue.length <= 0 ) return

    onNewTodo({
      id: new Date().getTime(),
      description,
      done: false
    })

    onResetForm()

  }

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control mt-2"
        name="description"
        value={ description }
        onChange={ onInputChange }
      />
      <button
        type="submit"
        className="btn btn-outline-secondary mt-2"
      >
        Agregar
      </button>
    </form>
  )
}

TodoAdd.propTypes = {
  onNewTodo: PropTypes.func.isRequired
}
