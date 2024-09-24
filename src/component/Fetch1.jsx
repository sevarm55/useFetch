import { useFetch } from "../hooks/hooks";

const Fetch1 = () => {

    const {loading,result} = useFetch('https://fakestoreapi.com/products')
    
    return (
        <div>
            Fetch1
        </div>
    );
}

export default Fetch1;