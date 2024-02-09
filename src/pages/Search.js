import React, { useEffect } from 'react'
import Nav from '../components/common/Nav'
import Button from '../components/common/Button'
import { animated, useSpring } from '@react-spring/web'
import { Input } from '@chakra-ui/react'

export default function Search(props) {
    const [springs, api] = useSpring(() => ({
        from: { opacity: 0 },
      }))
    
    useEffect(()=>{
        api.start({
            from: {
              opacity: 0,
            },
            to: {
             opacity: 1,
            },
          })
        
    },[api])
        

  return (
    <>
    <animated.div style={{...springs}}> 
    <div className='search-layout'>
        <div className='search-background'>
            <Nav />
            <div className='search-forms'>
                <div className='search-locations'>
                    <Input autocomplete="off" type="text" name="from" onChange={props.inputHandler} border='0' borderRadius='20vh 0 0 20vh' borderRight='1px solid #D1D1D1' p='2vw 2vw' placeholder='from' />
                    <Input autocomplete="off" type="text" name="to" onChange={props.inputHandler} border='0' borderRadius='0vh 20vh 20vh 0vh' p='2vw 2vw' placeholder='destination' />
                </div>
                <div className='search-date'>
                    <Input type="date" name="date" onChange={props.inputHandler}  border='0' borderRadius='20vh' p='2vw 2vw' id=""  />
                </div>
            </div>
        </div>
        <Button click={props.searchHandler} />
    </div>
    </animated.div>
    </>
  )
}
