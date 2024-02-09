import React from 'react'
import plane from '../assets/img/plane.png'
import border from '../assets/img/border.png'
import Button from '../components/common/Button'
import Nav from '../components/common/Nav'
import { animated, useSpring } from '@react-spring/web'

export default function Landing(props) {

  const [springs, api] = useSpring(() => ({
    from: { opacity: 1},
    onRest: () => props.setIsSearch(true)
  }))

  const handleClick = () => {
    api.start({
      from: {
        opacity: 1,

      },
      to: {
       opacity: 0,
      },
    })
  }
  return (
    <>
 <animated.div style={{...springs}}>   
    <Nav />

    <div className="app-content">
        <div className='landing-layout'>
        
        <img className='landing-graphic' src={plane} alt="" />
        <h2 className='landing-heading'>JetSetGo.</h2>
        <img className='landing-graphic-underline' src={border} alt="" />
        <Button click={handleClick} />
        
        </div>        
    </div>
    </animated.div>
    </>
  )
}
