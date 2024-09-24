import Fetch1 from './component/Fetch1'
import Fetch2 from './component/Fetch2'
import Fetch3 from './component/Fetch3'
import Fetch4 from './component/Fetch4'

import './App.css'
import { useFetch } from './hooks/hooks'

function App() {

  const {refresh,cacheMessage} = useFetch('https://fakestoreapi.com/products')
  
  return (
    <>
      <Fetch1 />
      <Fetch2 />
      <Fetch3 />
      <Fetch4 />
      <button onClick={refresh}>Refresh</button>
      {cacheMessage && <p>{cacheMessage}</p>}
    </>
  )
}

export default App
