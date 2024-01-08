import { useEffect, useState } from "react"

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const result = await response.json();
                setLoading(false);
                setData(result);
                setError("");
            }
            catch (error) {
                console.log(error.message);
                setError(error.message);
                setLoading(false);
            }


        }
        fetchData()
    }, [url])
    return { data, loading, error }
}
