import { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

  const [formState, setForm] = useState({
    username: 'Pablo',
    email: 'pablo@gmail.com'
  })

  const { username, email } = formState

  const onInputChange = ({ target }) => {
    const { name, value } = target
    setForm({
      ...formState,
      [name]: value
    })
  }

  useEffect( () => {
    // console.log('Use Effect Callback!')
  }, [])

  useEffect( () => {
    // console.log('FormState change!')
  }, [ formState ])

  useEffect( () => {
    // console.log('Email change!')
  }, [ email ])

  return (
    <>
      <h1>Formulario Simple</h1>
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
      {
        ( username === 'Fernando' ) &&  <Message />
      }
    </>
  )
}
