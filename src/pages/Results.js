import React, { useContext, useEffect } from 'react'
import Nav from '../components/common/Nav'
import PrimaryButton from '../components/common/Button'
import useFlights from '../hooks/useFlights'
import Flight from '../components/results/Flight'
import {Box, Input, Spinner} from '@chakra-ui/react'
import Filters from '../components/results/Filters'
import ResultContext from '../core/results'

export default function Results(props) {
  
  const results = useContext(ResultContext)
  const flights = useFlights()

  useEffect(()=>{
  }, [flights, results])

  console.log(results)
  return (
    <div className='results-layout'>
    <Nav />
    <div className='result-section'>
    <div className='result-forms'>
        <div className='search-forms result-form'>
          <div className='search-locations'>
              <Input autocomplete="off" type="text" value={props.input.from} name="from" onChange={props.inputHandler} border='0' borderRadius='20vh 0 0 20vh' borderRight='1px solid #D1D1D1' p='2vw 2vw' placeholder='from' />
              <Input autocomplete="off" type="text" value={props.input.to} name="to" onChange={props.inputHandler}  border='0'  borderRadius='0vh 20vh 20vh 0vh' p='2vw 2vw' placeholder='destination' />
          </div>
          <div className='search-date'>
          <Input type="date" name="date" value={props.input.date} onChange={props.inputHandler}  border='0' borderRadius='20vh' p='2vw 2vw' id="" />
          </div>
          <PrimaryButton click={props.searchHandler} />
      </div>
      </div>

      <div className='result-content'>
        <Filters clear={()=>props.setInput({from: '', to: '', date: ''})} />
        <div className='flights-list'>
        {results.list.data?.result?.length>0 ? results?.list?.data?.result.map(item=><Flight item={item} />) :
         <Box width='90vw' height='40vh' display='flex' alignItems='center' justifyContent='center'><Spinner /></Box>}
        </div>
      </div>
    </div>
    </div>
  )
}
