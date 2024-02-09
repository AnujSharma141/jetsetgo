import { useEffect, useState } from 'react'

export default function useFlights() {
    const [flights, setFlights] = useState({data: {result: []}})

    useEffect(()=>{
        fetch('https://api.npoint.io/4829d4ab0e96bfab50e7').then(data=>
        data.json()).then(res=>
        setFlights(res))
    },[])
    
    return flights
}
