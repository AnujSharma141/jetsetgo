import { Badge, Box, Center, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import Button from '../common/Button';


import plane from '../../assets/img/plane.png'

export default function Flight({item}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent borderRadius='3vh' w='60vw'>
          <ModalCloseButton />
          <ModalBody>
          <Box display='flex' flexDir='row'>
            <Box>
            <img className='landing-graphic' src={plane} alt="" />
            <div className='result-flight' style={{alignItems: 'flex-start', marginLeft: '2vw', marginTop:'1vw',fontSize:'5vh', fontWeight: '600'}}>
          {item?.displayData?.airlines[0]?.airlineName}
          <p style={{fontSize: '3vh'}} className='detail-name'>{item?.displayData?.airlines[0]?.airlineCode + " " + item?.displayData?.airlines[0]?.flightNumber}</p>
        </div>
            </Box>
            <Box mt='12vh' ml='2vh'>

            <div className='result-place'>
            <p className='place-name' style={{textAlign: 'center'}}>{item?.displayData?.source?.airport.cityName}</p>
            <p className='place-code' style={{textAlign: 'center'}}>{item?.displayData?.source?.airport.cityCode}</p>
        </div>  

        <Center my='2vh' className='place-icon' >
            <FaArrowDown />
        </Center>
            <div className='result-place'>
            <p style={{textAlign: 'center'}} className='place-name'>{item?.displayData?.destination?.airport.cityName}</p>
            <p style={{textAlign: 'center'}} className='place-code'>{item?.displayData?.destination?.airport.cityCode}</p>
           </div>
            </Box>
          </Box>

          </ModalBody>
          <ModalFooter>            
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    <div className='result-list-item' onClick={onOpen}>
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
    </>
  )
}
