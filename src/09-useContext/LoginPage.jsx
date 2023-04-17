import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const LoginPage = () => {

  const { user, setUser } = useContext( UserContext )
  user && console.log( 'User → ', user )

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        { JSON.stringify( user, null, 3 ) }
      </pre>

      <button className="btn btn-secondary"
        onClick={ () => setUser({ id: 123, name: 'Fernando Herrera', email: 'fherrara@gmail.com' }) }
      >
        Establecer Usuario
      </button>

    </>
  )
}