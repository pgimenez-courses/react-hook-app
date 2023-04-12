import { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef()

	const onClick = () => {
		inputRef.current.select()
	}

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={ inputRef }
        type="text"
        className="form-control"
        placeholder="Ingrese un texto"
      />

      <button
				onClick={ onClick }
      	className="btn btn-secondary mt-2">
					Set Focus
			</button>

    </>
  )
}
