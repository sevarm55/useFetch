import { useFetch } from "../hooks/hooks"

const Fetch2 = () => {

    const {loading,result} = useFetch('https://fakestoreapi.com/products')

    return (
        <div>
            Fetch2
        </div>
    )
}

export default Fetch2