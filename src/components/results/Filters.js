import React, { useContext } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
} from '@chakra-ui/react'
import { FaAngleDown } from "react-icons/fa6";
import { filterByAirline, filterByStop, getAirlines, sortPriceHigh, sortPriceLow } from '../../util/helpers';
import useFlights from '../../hooks/useFlights';
import ResultContext from '../../core/results';

export default function Filters(props) {
    const flights = useFlights()
    const results = useContext(ResultContext)
    
  return (
    <div className='result-filters'>
        <Menu>
            <MenuButton fontWeight='400' mt='-4'bg='white' borderRadius='20vh' border='1px solid #D1D1D1' as={Button} rightIcon={<FaAngleDown color='#D1D1D1' />}>
                Flight
            </MenuButton>
            <MenuList>
                {getAirlines(flights?.data?.result).map(item=>
                <MenuItem onClick={() => results.setResults({data:{result: filterByAirline(flights?.data?.result, item)}})}>{item}</MenuItem>)}
            </MenuList>
        </Menu>
        
        <Menu>
            <MenuButton fontWeight='400' mt='-4' mx='3' bg='white' borderRadius='20vh' border='1px solid #D1D1D1' as={Button} rightIcon={<FaAngleDown color='#D1D1D1' />}>
                Stops
            </MenuButton>
            <MenuList >
                <MenuItem onClick={() => results.setResults({data:{result: filterByStop(flights?.data?.result, 'Non stop')}})}>Non Stop</MenuItem>
                <MenuItem onClick={() => results.setResults({data:{result: filterByStop(flights?.data?.result, '1 Stop')}})}>With Stop</MenuItem>
            </MenuList>
        </Menu>

        <Menu>
            <MenuButton fontWeight='400' mt='-4'bg='white' borderRadius='20vh' border='1px solid #D1D1D1' as={Button} rightIcon={<FaAngleDown color='#D1D1D1' />}>
                Sort by
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => results.setResults({data:{result: sortPriceHigh(flights?.data?.result)}})}>lowest price</MenuItem>
                <MenuItem onClick={() => results.setResults({data:{result: sortPriceLow(flights?.data?.result)}})}>highest price</MenuItem>
            </MenuList>
        </Menu>

        <Box cursor='pointer' mt='-1.5vh' textDecor='underline' ml='2vh' fontSize='1.9vh' onClick={() => {results.setResults(results.display); props.clear();}}>Clear Filters/Search</Box>
    </div>
  )
}
