import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

  const {
    formState,
    onInputChange,
    onResetForm,
    username,
    email,
    password
  } = useForm({
    username: '',
    email: '',
    password: ''
  })

  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />
      <input
        type="text"
        name="username"
        className="form-control"
        placeholder="User Name"
        value={ username }
        onChange={ onInputChange }
      />
      <input
        type="email"
        name="email"
        className="form-control mt-2"
        placeholder="user@gmail.com"
        value={ email }
        onChange={ onInputChange }
      />
      <input
        type="password"
        name="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        value={ password }
        onChange={ onInputChange }
      />
      <button onClick={ onResetForm } className='btn btn-primary mt-2'>Reset</button>
    </>
  )
}
