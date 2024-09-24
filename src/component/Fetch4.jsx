import { useFetch } from "../hooks/hooks"

const Fetch4 = () => {

    const {loading,result} = useFetch('https://fakestoreapi.com/products')
    
    return (
        <div>
            Fetch4
        </div>
    )
}

export default Fetch4