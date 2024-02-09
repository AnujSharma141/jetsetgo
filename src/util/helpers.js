const getAirlines = (flights) =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const allAirlineNames = flights?.flatMap(flight => flight?.displayData.airlines[0].airlineName);
    const uniqueAirlineNames = [...new Set(allAirlineNames)];
    return uniqueAirlineNames;
}

const filterByAirline = (flights, airlineName) =>{
    return flights?.filter(flight=> flight?.displayData.airlines[0].airlineName  === airlineName);
}

const filterByStop = (flights, stop) =>{
    return flights?.filter(flight=> flight?.displayData.stopInfo  === stop);
}

const sortPriceHigh = (flights) =>{
    return [...flights].sort((a, b) => a.fare - b.fare)
}

const sortPriceLow = (flights) =>{
    return [...flights].sort((a, b) => b.fare - a.fare)
}


const search = (input, flights) =>{
    return flights?.filter(flight=> flight?.displayData.source.airport.cityName.toLowerCase()  === input.from.toLowerCase() || flight?.displayData.destination.airport.cityName.toLowerCase() === input.to.toLowerCase() );
}

export {getAirlines, sortPriceHigh, sortPriceLow, filterByAirline ,filterByStop , search}