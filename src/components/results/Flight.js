import { Badge } from '@chakra-ui/react';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default function Flight({item}) {
  return (
    <div className='result-list-item'>
        <div className='result-flight'>
          {item?.displayData?.airlines[0]?.airlineName}
          <p className='detail-name'>{item?.displayData?.airlines[0]?.airlineCode + " " + item?.displayData?.airlines[0]?.flightNumber}</p>
        </div>

        <div className='result-place'>
            <p className='place-name'>{item?.displayData?.source?.airport.cityName}</p>
            <p className='place-code'>{item?.displayData?.source?.airport.cityCode}</p>
        </div>

        <div className='place-icon'>
            <FaArrowRight />
        </div>

        <div className='result-place'>
            <p className='place-name'>{item?.displayData?.destination?.airport.cityName}</p>
            <p className='place-code'>{item?.displayData?.destination?.airport.cityCode}</p>
        </div>

        <div className='result-detail'>
            <p className='detail-value detail-date'>{item?.displayData?.source?.depTime.slice(0,10)}</p>
            <p className='detail-name'>Start Date</p>
        </div>

        <div className='result-detail'>
            <Badge variant='subtle' colorScheme='purple' borderRadius='10vw'>{item?.displayData.stopInfo}</Badge>
            <p className='detail-value'>{item?.displayData.totalDuration}</p>
            <p className='detail-name'>Duration</p>
        </div>

        <div className='result-price'>Rs. {item?.fare}</div>
    </div>
  )
}
