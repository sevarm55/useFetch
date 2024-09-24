import { useFetch } from '../hooks/hooks'

const Fetch3 = () => {
  const { result, loading, error } = useFetch('https://fakestoreapi.com/products')

  return (
    <div>
      Fetch3
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {result && (
        <div>
          <p>Items count: {result.length}</p>
        </div>
      )}
    </div>
  )
}

export default Fetch3
