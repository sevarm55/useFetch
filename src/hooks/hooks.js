import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cacheMessage, setCacheMessage] = useState('');
    
    const fetchData = () => {
        const cache = localStorage.getItem(url)
        
        if(cache) {
            const {data,time} = JSON.parse(cache)
            if(Date.now() - time < 15000) {
                setResult(data)
                setLoading(false)
                setCacheMessage('Data loaded from cache');
                return
            } 
        }
        
        fetch(url)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem(url, JSON.stringify({data,time: Date.now()}))
            setResult(data)
            setCacheMessage('Fetched from backend');
        })
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }

       
    const refresh = () => {
        const cached = localStorage.getItem(url);

        if (cached) {
            const { time } = JSON.parse(cached);
            if (Date.now() - time >= 15000) {
                localStorage.removeItem(url);
                fetchData();
                setCacheMessage('')
            } else {
                setCacheMessage('use cache');
            }
        }
    }

    useEffect(() => {
        fetchData()
    },[url])

    

    return { result, error, loading,refresh, cacheMessage };
};