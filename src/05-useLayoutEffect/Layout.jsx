import { useCounter, useFetch } from '../hooks'
import { LoadingQuote, Quote } from '../03-example'

export const Layout = () => {

  const { counter, increment } = useCounter(1)

  const { data = [], isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/' + counter)
  const { quote, author } = !!data && data[( data.length -1 )]

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading
          ? <LoadingQuote />
          : <Quote quote={ quote } author={ author } />
      }

      <button onClick={ increment } className="btn btn-primary" disabled={ isLoading }>
        Next quote
      </button>
    </>
  )
}
