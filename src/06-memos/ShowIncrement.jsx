import React from 'react'

export const ShowIncrement = React.memo( ({ increment }) => {

  console.log('Me volví a generar :)')

  return (
    <button
      className="btn btn-secondary mt-2"
      onClick={() => {
        increment( 5 )
      }}
    >
      Increment
    </button>
  )
})
