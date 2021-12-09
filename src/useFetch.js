import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {    
                /*headers: {
                    'Authorization': 'Basic ' + btoa('99:theredpill')
                },*/
                signal: abortCont.signal,
            })
                .then((res) =>
                    res.json()
                )
                .then((data) => {
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    if (err.name === "AbortError") {
                        console.log("Fetch Aborted")
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        }, 200
        )

        return () => abortCont.abort()
    }, [url])

    return { data, isPending, error }
}

export default useFetch;