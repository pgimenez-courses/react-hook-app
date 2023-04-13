import { useState } from 'react'
import { useCounter } from '../hooks'
import { Small } from './Small'

export const Memorize = () => {
  
  const { counter, increment } = useCounter(1)
  const [show, setShow] = useState(false)
  
  return (
    <>
      <h1>Counter: <Small value={ counter } /></h1>
      <hr />

      <button
        className="btn btn-secondary"
        onClick={ increment }>
          +1
      </button>

      <button
        className="btn btn-outline-secondary"
        onClick={ () => setShow( !show ) }>
          Show/Hide → { JSON.stringify(show) }
      </button>

    </>
  )
}
