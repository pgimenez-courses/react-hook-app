import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {

  const { user } = useContext( UserContext )
  user && console.log( 'User → ', user )

  return (
    <>
      <h1>HomePage <small>{ user?.name }</small></h1>
      <hr />

      <pre>
        { JSON.stringify( user, null, 3 ) }
      </pre>

    </>
  )
}