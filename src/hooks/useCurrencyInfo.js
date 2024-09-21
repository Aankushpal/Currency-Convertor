import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res[currency])) // we use square brackets instead of dot notation to access the object property 

        console.log(data)
    }, [currency, data]) //This array is the dependency array, it means when the value of the variable in the array changes, the useEffect will run again

    console.log(data)
    return data
}

export default useCurrencyInfo;