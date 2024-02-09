import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
export default function Button(props) {
  return (
    <div onClick={props.click} className='primary-button'>
      <span>lets fly.</span>
      <span className='primary-button-arrow'><FaArrowRight size={'30vh'} /></span></div>
  )
}
